// 我的自选股
<template>
  <div class="daily-limit-analysis-detail">
    <a-table
      :pagination="false"
      :columns="table_columns"
      :data-source="table_data"
      rowKey="id"
    >
      <div slot="代码名称" slot-scope="代码名称">
        <div class="bigtxt">{{ 代码名称.名称 }}</div>
        <div>{{ 代码名称.代码 }}</div>
      </div>
      <div slot="涨幅" slot-scope="涨幅">
        <div
          :class="{
            red: Number(涨幅) > 0,
            green: Number(涨幅) < 0,
            gray: Number(涨幅) === 0,
            bignum: true,
          }"
        >
          {{ 涨幅 }}%
        </div>
      </div>
      <div slot="选入时间" slot-scope="选入时间">
        <div class="bigtxt gray">{{ 选入时间 }}</div>
      </div>
      <div slot="进入价格" slot-scope="进入价格, record">
        <div
          :class="{
            red: Number(record.涨幅) > 0,
            green: Number(record.涨幅) < 0,
            gray: Number(record.涨幅) === 0,
            bignum: true,
          }"
        >
          {{ 进入价格 }}
        </div>
      </div>
      <div slot="现价" slot-scope="现价, record">
        <div
          :class="{
            red: Number(record.涨幅) > 0,
            green: Number(record.涨幅) < 0,
            gray: Number(record.涨幅) === 0,
            bignum: true,
          }"
        >
          {{ 现价 }}
        </div>
      </div>
      <div slot="操作" slot-scope="操作">
        <a-switch
          checked-children="取消自选"
          un-checked-children="添加自选"
          default-checked
        />
      </div>
    </a-table>
  </div>
</template>
<script>
import { table_columns, table_data, date } from "@/views/mywatchlist_data.js";
export default {
  data() {
    return { table_columns, table_data, date };
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 5px;
  }
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
</style>
