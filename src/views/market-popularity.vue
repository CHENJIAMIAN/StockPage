// 市场人气
<template>
  <div class="market-popularity">
    <a-select
      show-search
      :value="searchValue"
      size="large"
      placeholder="搜索"
      style="width: 100%; padding: 10px"
      :default-active-first-option="false"
      :show-arrow="!false"
      :filter-option="false"
      :not-found-content="null"
      @search="handleSearch"
      @change="handleChange"
    >
      <a-icon slot="suffixIcon" type="search" />
      <a-select-option v-for="d in searchOptions" :key="d.code">
        {{ d.code }} -- {{ d.name }}
      </a-select-option>
    </a-select>
    <div
      v-infinite-scroll="handleInfiniteOnLoad"
      class="demo-infinite-container"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <a-table
        :pagination="false"
        :columns="table_columns"
        :data-source="table_data"
        :customRow="click"
        rowKey="id"
        :scroll="{ x: 480 }"
      >
        <div slot="rank" slot-scope="rank">
          <div class="bigtxt">{{ rank }}</div>
          <!--          <div>{{ rank }}</div>-->
        </div>
        <div slot="codeName" slot-scope="codeName">
          <div class="bigtxt">{{ codeName.name }}</div>
          <div>{{ codeName.code }}</div>
        </div>
        <div slot="jiaozuori" slot-scope="jiaozuori">
          <img v-if="jiaozuori.isUp" src="../assets/img/up.png" width="16px" />
          <img
            v-else
            src="../assets/img/down.png"
            width="16px"
            :style="jiaozuori.value == 0 ? 'display:none' : 'display:true'"
          />
          <span class="bigtxt">{{ jiaozuori.value }}</span>
        </div>

        <div slot="xianjia" slot-scope="xianjia">
          <div :class="xianjia.up ? 'red bignum' : 'green bignum'">
            {{ xianjia.value }}
          </div>
        </div>
        <div slot="zhangdiefu" slot-scope="zhangdiefu">
          <div
            :class="{
              'red bignum': Number(zhangdiefu) > 0,
              'green bignum': Number(zhangdiefu) < 0,
              'gray bignum': Number(zhangdiefu) === 0,
            }"

          >
            {{ zhangdiefu }}%
          </div>
        </div>
      </a-table>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
      <div v-show="alreadyBottom" style="text-align: center">到底啦</div>
    </div>
  </div>
</template>
<script>
import { table_columns, table_data } from "@/views/marketpopularity_data.js";

import global_url from "../App.vue";
export default {
  data() {
    return {
      alreadyBottom: false,
      loading: false,
      busy: false,
      table_columns,
      table_data: [],
      searchOptions: [],
      searchValue: undefined, //undefined才会显示placeholder
      current_page: 0,
      totalPage: 1,
    };
  },
  // created() {
  // var baseUrl = global_url.baseUrl;
  // fetch(baseUrl + "/api/popular/popularList.do?pageSize=10")
  //   .then((r) => r.json())
  //   .then((r) => {
  //     this.table_data = r.rows;
  //     this.current_page = r.pageNo;
  //     this.totalPage = r.totalPage
  //   });
  // },
  activated() {
    document.getElementsByClassName("demo-infinite-container")[0].scrollTop =
      localStorage["market_popularity"] || 0;
  },
  methods: {
    click(record, index) {
      return {
        on: {
          click: () => {
            this.$router.push(`/stock_detail/` + record.codeName.code);
          },
        },
      };
    },

    handleInfiniteOnLoad() {
      const data = this.table_data;
      this.loading = true;
      const next_page = this.current_page + 1;
      fetch(
        global_url.baseUrl +
          "/api/popular/popularList.do?pageNo=" +
          next_page +
          "&pageSize=10"
      )
        .then((r) => r.json())
        .then((r) => {
          // console.log(r.rows)
          if (next_page <= r.totalPage) {
            this.table_data = data.concat(r.rows);
            this.loading = false;
            this.current_page = r.pageNo;
            this.totalPage = r.totalPage;
          } else {
            console.log(r.pageNo + "--" + r.totalPage);
            this.loading = false;
            this.alreadyBottom = true;
          }
        });
    },
    handleSearch(value) {
      console.log("handleSearch" + value);
      fetch(global_url.baseUrl + "/home/stockCodeFuzzy.do?stockCode=" + value)
        .then((r) => r.json())
        .then((r) => {
          this.searchOptions = r.obj;
        });
    },
    handleChange(value) {
      if (value == "" || value == "undefine") {
        alert("输入数据不能为空");
      }

      this.searchValue = value;
      fetch(global_url.baseUrl + "/api/popular/popular.do?stockCode=" + value)
        .then((r) => r.json())
        .then((r) => {
          this.table_data = r.rows;
          this.current_page = r.pageNo;
          this.totalPage = r.totalPage;
        });
      this.searchValue = [];
    },
  },
};
</script>
<style lang="scss" scoped>
.demo-infinite-container {
  overflow: auto;
  height: calc(100vh - 126px);
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

</style>
