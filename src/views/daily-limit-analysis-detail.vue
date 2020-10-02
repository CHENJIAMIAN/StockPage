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
      <div slot="nameCode" slot-scope="nameCode">
        <div class="bigtxt">{{ nameCode.name }}</div>
        <div>{{ nameCode.code }}</div>
      </div>
      <div slot="zhangdiefu" slot-scope="zhangdiefu">
        <div class="bignum red">{{ zhangdiefu }}%</div>
      </div>
      <div slot="jitianjiban" slot-scope="jitianjiban">
        <div class="bigtxt">{{ jitianjiban }}</div>
      </div>
      <div slot="lianbantianshu" slot-scope="lianbantianshu">
        <div class="bigtxt">{{ lianbantianshu }}</div>
      </div>
      <div slot="subject" slot-scope="subject">
        <div class="bigtxt">{{ subject }}</div>
      </div>
    </a-table>
  </div>
</template>
<script>
import {
  table_columns,
  table_data,
} from "@/views/dailylimitanalysisdetail_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return { table_columns, table_data, date: "" };
  },
  created() {
    // 根据 date 去获取数据
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/replay/replayList.do")
        .then((r) => r.json())
        .then((r) => {
          console.log(r.obj)
          this.table_data = r.obj
        });
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
