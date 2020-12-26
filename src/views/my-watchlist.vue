// 我的自选股
<template>
  <div class="daily-limit-analysis-detail">
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
        rowKey="id"
        :scroll="{ x: 480 }"
      >
        <div slot="codeName" slot-scope="codeName">
          <div class="bigtxt">{{ codeName.name }}</div>
          <div>{{ codeName.code }}</div>
        </div>
        <div slot="zhangfu" slot-scope="zhangfu">
          <div
            :class="{
              red: Number(zhangfu) > 0,
              green: Number(zhangfu) < 0,
              gray: Number(zhangfu) === 0,
              bignum: true,
            }"
          >
            {{ zhangfu }}%
          </div>
        </div>
        <div slot="selectDate" slot-scope="selectDate">
          <div class="bigtxt gray">{{ selectDate }}</div>
        </div>
        <div slot="selectPrice" slot-scope="selectPrice, record">
          <div
            :class="{
              red: Number(record.selectPrice) > 0,
              green: Number(record.selectPrice) < 0,
              gray: Number(record.selectPrice) === 0,
              bignum: true,
            }"
          >
            {{ selectPrice }}
          </div>
        </div>
        <div slot="现价" slot-scope="nowPrice, record">
          <div
            :class="{
              red: Number(record.nowPrice) > 0,
              green: Number(record.nowPrice) < 0,
              gray: Number(record.nowPrice) === 0,
              bignum: true,
            }"
          >
            {{ 现价 }}
          </div>
        </div>
        <div slot="operation" slot-scope="operation, record">
          <a-switch
            checked-children="取消自选"
            un-checked-children="添加自选"
            :default-checked="operation"
            @change="onChange(record.id, $event)"
          />
        </div>
      </a-table>
      <div v-if="loading && !busy" class="demo-loading-container">
        <a-spin />
      </div>
    </div>
  </div>
</template>
<script>
import { table_columns, table_data, date } from "@/views/mywatchlist_data.js";
import global_url from "../App.vue";
import global_user from "@/App"
export default {
  data() {
    return {
      loading: false,
      busy: false,
      table_columns,
      table_data: [],
      date,
      current_page: 0,
      totalPage: 1};
  },
  created() {

  },

  activated() {

    if(global_user.userInfo.token=="" ||global_user.userInfo.userId==""){
      this.$router.push(`/user`);
    }
    document.getElementsByClassName('demo-infinite-container')[0].scrollTop =localStorage['my_watchlist'] || 0;

    // var baseUrl = global_url.baseUrl;
    // fetch(baseUrl + "/api/userSelect/select.do?userId=" + global_user.userInfo.userId)
    //   .then((r) => r.json())
    //   .then((r) => {
    //     this.table_data = r.rows;
    //     // this.table_data = r.rows
    //   });
  },
  methods: {

    handleInfiniteOnLoad() {
      if(global_user.userInfo.token=="" ||global_user.userInfo.userId==""){
        this.$router.push(`/user`);
      }
      const data = this.table_data;
      this.loading = true;
      const next_page = this.current_page + 1;
      var url = global_url.baseUrl+"/api/userSelect/select.do?pageNo=" +
          next_page +
          "&pageSize=10";
      if(global_user.userInfo.userId!=""){
        url+="&userId="+global_user.userInfo.userId
      }else{
        return;
      }
      fetch( url )
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


    onChange(id, checked) {
      console.log(`a-switch to ${checked}`, id);
      // 此处请求自选或取消自选的接口
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  // ant switch样式修改
  .ant-switch {
    height: 40px;
    width: 44px;
    border: 1px solid #3984f7;
    border-radius: 4px;
    background: transparent;
  }
  .ant-switch-checked .ant-switch-inner {
    color: white;
  }
  .ant-switch-checked {
    background-color: #1890ff;
  }
  .ant-switch:after,
  .ant-switch-checked:after {
    display: none;
  }
  .ant-switch-inner {
    margin-right: 5px;
    margin-left: 5px;
    color: #3984f7;
    font-size: 0.8rem;
  }
}
.daily-limit-analysis-detail {
  display: grid;
  align-items: center;
}

.demo-infinite-container {
  overflow: auto;
  height: calc(100vh - 65px);
}
.demo-loading-container {
  position: absolute;
  bottom: 105px;
  width: calc(100% - 1rem);
  text-align: center;
}
</style>
