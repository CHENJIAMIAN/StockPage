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
        <div class="bignum red">{{ 涨幅 }}%</div>
      </div>
      <div slot="选入时间" slot-scope="选入时间">
        <div class="bigtxt">{{ 选入时间 }}</div>
      </div>
      <div slot="进入价格" slot-scope="进入价格">
        <div class="bignum red">{{ 进入价格 }}</div>
      </div>
      <div slot="现价" slot-scope="现价">
        <div class="bignum red">{{ 现价 }}</div>
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
.daily-limit-analysis-detail {
  display: grid;
  align-items: center;

  ::v-deep {
    // ant switch样式修改
    .ant-switch {
      height: 50px;
      width: 50px;
      width: 56px;
      border: 2px solid #3984f7;
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
      margin-right: 9px;
      margin-left: 9px;
      color: #3984f7;
      font-size: 1rem;
    }
  }
}
</style>
