// 步步高升策略
<template>
  <a-table
    :pagination="false"
    :columns="table_columns"
    :data-source="table_data"
    rowKey="id"
  >
    <div slot="序号" slot-scope="序号">
      <div class="bigtxt">{{ 序号 }}</div>
      <div>{{ 序号 }}</div>
    </div>
    <div slot="代码名称" slot-scope="代码名称">
      <div class="bigtxt">{{ 代码名称.名称 }}</div>
      <div>{{ 代码名称.代码 }}</div>
    </div>
    <div slot="涨跌幅" slot-scope="涨跌幅">
      <div class="bignum red">{{ 涨跌幅 }}%</div>
    </div>
    <div slot="现价" slot-scope="现价">
      <div class="bignum red">{{ 现价 }}</div>
    </div>
    <div slot="入选时间" slot-scope="入选时间">
      <div class="bigtxt">{{ 入选时间 }}</div>
    </div>
  </a-table>
</template>
<script>
import { table_columns, table_data } from "@/views/bbgs_solution_data.js";
export default {
  data() {
    return { table_columns, table_data };
  },
};
</script>
<style lang="scss" scoped></style>
