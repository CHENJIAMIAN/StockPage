<template>
  <div class="wkhmd">
    <div class="wkhmd-row1">
      <div class="name">{{ data.name }}</div>
      <div class="desc">{{ data.desc }}</div>
    </div>
    <div class="wkhmd-row2">
      <div class="name">常用机构</div>
      <div class="list">
        <div
          class="item"
          v-for="item in data.commonInstitutions"
          :key="item.id"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="wkhmd-row3">
      <div v class="name">上榜历史</div>
      <a-table
        :pagination="false"
        :columns="listedHistory_columns"
        :data-source="listedHistory_data"
        rowKey="id"
      >
        <div slot="上榜股票" slot-scope="上榜股票">
          <div class="bigtxt">{{ 上榜股票.名称 }}</div>
          <div>{{ 上榜股票.代码 }}</div>
        </div>
        <div slot="买入" slot-scope="买入">
          <div
            :class="{
              red: Number(买入.value) > 0,
              green: Number(买入.value) < 0,
              gray: Number(买入.value) === 0,
              bignum: true,
            }"
          >
            {{ 买入.value + 买入.unit }}
          </div>
        </div>
        <div slot="卖出" slot-scope="卖出, record">
          <div
            :class="{
              red: Number(record.买入.value) > 0,
              green: Number(record.买入.value) < 0,
              gray: Number(record.买入.value) === 0,
              bignum: true,
            }"
          >
            {{ 卖出.value + 卖出.unit }}
          </div>
        </div>
      </a-table>
    </div>
  </div>
</template>
<script>
import {
  data,
  listedHistory_columns,
  listedHistory_data,
} from "@/views/wellknownhotmoneydetail_data.js";
export default {
  data() {
    return {
      data,
      listedHistory_columns,
      listedHistory_data,
    };
  },
};
</script>
<style lang="scss" scoped>
.wkhmd {
  display: grid;
  grid-template-rows: auto auto auto;
  .name {
    font-size: 1.5rem;
    font-family: PingFang SC;
    font-weight: 800;
    color: #333333;
    line-height: 34px;
    border-bottom: 0.5px solid #80808014;
  }
  &-row1 {
    display: grid;
    grid-gap: 10px;
    padding: 20px;

    border-bottom: 10px #f4f8f9 solid;

    .desc {
      font-size: 1.2rem;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 34px;
      color: #555555;
    }
  }
  &-row2 {
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    border-bottom: 10px #f4f8f9 solid;
    .list {
      display: grid;
      grid-gap: 20px;
      align-items: center;
      .item {
        font-size: 1.2rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 34px;
        border-bottom: 0.5px solid #80808014;
      }
    }
  }
  &-row3 {
    display: grid;
    .name {
      padding: 20px;
    }
  }
}
</style>
