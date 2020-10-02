// 市场人气
<template>
  <div class="market-popularity">
    <a-select
      show-search
      :value="searchValue"
      size="large"
      placeholder="搜索"
      style="width: 100%;padding:10px;"
      :default-active-first-option="false"
      :show-arrow="!false"
      :filter-option="false"
      :not-found-content="null"
      @search="handleSearch"
      @change="handleChange"
    >
      <a-icon slot="suffixIcon" type="search" />
      <a-select-option v-for="d in searchOptions" :key="d.value">
        {{ d.text }}
      </a-select-option>
    </a-select>
    <a-table
      :pagination="false"
      :columns="table_columns"
      :data-source="table_data"
      rowKey="id"
    >
      <div slot="id" slot-scope="id">
        <div class="bigtxt">{{ id }}</div>
        <div>{{ id }}</div>
      </div>
      <div slot="jiaozuori" slot-scope="jiaozuori">
        <img v-if="jiaozuori.isUp" src="../assets/img/up.png" width="16px" />
        <img v-else src="../assets/img/down.png" width="16px" />
        <span class="bigtxt">{{ jiaozuori.value }}</span>
      </div>
      <div slot="codeName" slot-scope="codeName">
        <div class="bigtxt">{{ codeName.name }}</div>
        <div>{{ codeName.code }}</div>
      </div>
      <div slot="xianjia" slot-scope="xianjia">
        <div class="bignum red">{{ xianjia }}</div>
      </div>
      <div slot="zhangdiefu" slot-scope="zhangdiefu">
        <div
          :class="{
            red: Number(zhangdiefu) > 0,
            green: Number(zhangdiefu) < 0,
            gray: Number(zhangdiefu) === 0,
            bignum: true,
          }"
        >
          {{ zhangdiefu }}%
        </div>
      </div>
    </a-table>
  </div>
</template>
<script>
import { table_columns, table_data } from "@/views/marketpopularity_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return {
      table_columns,
      table_data,
      searchOptions: [],
      searchValue: undefined, //undefined才会显示placeholder
    };
  },
  created() {
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/popular/popularList.do")
      .then((r) => r.json())
      .then((r) => {
        this.table_data = r.rows
      });
  },
  methods: {
    handleSearch(value) {},
    handleChange(value) {
      this.searchValue = value;
    },
  },
};
</script>
<style lang="scss" scoped></style>
