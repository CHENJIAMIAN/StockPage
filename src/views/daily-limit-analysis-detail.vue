// 涨停分析详情
<template>
  <div class="daily-limit-analysis-detail">
    <div class="row1">{{ date }}</div>
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
        <div class="bignum red">{{ 涨幅 }}%</div>
      </div>
      <div slot="几天几板" slot-scope="几天几板">
        <div class="bigtxt">{{ 几天几板 }}</div>
      </div>
      <div slot="连板天" slot-scope="连板天">
        <div class="bigtxt">{{ 连板天 }}</div>
      </div>
      <div slot="短线主题" slot-scope="短线主题">
        <div class="bigtxt">{{ 短线主题 }}</div>
      </div>
    </a-table>
  </div>
</template>
<script>
import {
  table_columns,
  table_data,
} from "@/views/dailylimitanalysisdetail_data.js";
export default {
  data() {
    return { table_columns, table_data, date: "" };
  },
  created() {
    // 根据 date 去获取数据
    this.date = this.$route.params.date;
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 16px 0;
  }
}
.daily-limit-analysis-detail {
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  padding: 1rem;

  .row1 {
    border-bottom: 1px solid #f4f8fb;
    font-size: 1.5rem;
    font-family: DIN Medium;
    font-weight: 400;
    color: #333333;
    line-height: 4rem;
  }
}
</style>
