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
      <div slot="排名" slot-scope="排名">
        <div class="bigtxt">{{ 排名 }}</div>
        <div>{{ 排名 }}</div>
      </div>
      <div slot="较昨日" slot-scope="较昨日">
        <img v-if="较昨日.isUp" src="../assets/img/up.png" width="16px" />
        <img v-else src="../assets/img/down.png" width="16px" />
        <span class="bigtxt">{{ 较昨日.value }}</span>
      </div>
      <div slot="代码名称" slot-scope="代码名称">
        <div class="bigtxt">{{ 代码名称.名称 }}</div>
        <div>{{ 代码名称.代码 }}</div>
      </div>
      <div slot="现价" slot-scope="现价">
        <div class="bignum red">{{ 现价 }}</div>
      </div>
      <div slot="涨跌幅" slot-scope="涨跌幅">
        <div
          :class="{
            red: Number(涨跌幅) > 0,
            green: Number(涨跌幅) < 0,
            gray: Number(涨跌幅) === 0,
            bignum: true,
          }"
        >
          {{ 涨跌幅 }}%
        </div>
      </div>
    </a-table>
  </div>
</template>
<script>
import { table_columns, table_data } from "@/views/marketpopularity_data.js";
export default {
  data() {
    return {
      table_columns,
      table_data,
      searchOptions: [],
      searchValue: undefined, //undefined才会显示placeholder
    };
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
