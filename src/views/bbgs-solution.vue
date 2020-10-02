// 步步高升策略
<template>
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
    >
      <div slot="id" slot-scope="id">
        <div class="bigtxt">{{ id }}</div>
        <div>{{ id }}</div>
      </div>
      <div slot="codeName" slot-scope="codeName">
        <div class="bigtxt">{{ codeName.name }}</div>
        <div>{{ codeName.code }}</div>
      </div>
      <div slot="zhangdiefu" slot-scope="zhangdiefu">
        <div class="bignum red">{{ zhangdiefu }}%</div>
      </div>
      <div slot="xianjia" slot-scope="xianjia">
        <div class="bignum red">{{ xianjia }}</div>
      </div>
      <div slot="selectDate" slot-scope="selectDate">
        <div class="bigtxt">{{ selectDate }}</div>
      </div>
    </a-table>
    <div v-if="loading && !busy" class="demo-loading-container">
      <a-spin />
    </div>
  </div>
</template>
<script>
import { table_columns, table_data } from "@/views/bbgs_solution_data.js";
import global_url from "../App.vue";
export default {
  data() {
    return { loading: false, busy: false, table_columns, table_data: [] };
  },
  created() {
    // 根据id去获取数据
    this.$route.params.id;

    var baseUrl = global_url.baseUrl;
    var strategyId = this.$route.params.id;
    fetch(baseUrl + "/api/strategy/strategyList.do?strategyId=" + strategyId)
      .then((r) => r.json())
      .then((r) => {
        console.log(r.rows);
        this.table_data = r.rows;
        // this.table_data = r.rows
      });
  },
  methods: {
    handleInfiniteOnLoad() {
      const data = this.table_data;
      this.loading = true;
      var baseUrl = global_url.baseUrl;
      var strategyId = this.$route.params.id;
      fetch(baseUrl + "/api/strategy/strategyList.do?strategyId=" + strategyId)
        .then((r) => r.json())
        .then((r) => {
          this.table_data = data.concat(r.rows);
          this.loading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.demo-infinite-container {
  overflow: auto;
  height: calc(100vh - 66px);
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: calc(100% - 1rem);
  text-align: center;
}
</style>
