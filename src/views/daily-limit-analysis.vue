<template>
  <div class="daily-limit-analysis">
    <div class="row1">{{ data.date }}</div>
    <div class="row2">
      <div>
        <span class="bluetxt">两市涨停数：</span>
        <span class="redtxt">{{ data.count }}只</span>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">其中，涨幅{{ " " }}</span>
        <span class="redtxt">20%（{{ data.increase20Percent }}）</span>
        <span class="bluetxt">涨幅：</span>
        <span class="redtxt">10%（{{ data.increase10Percent }}）</span>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">热点题材：</span>
        <template v-for="item in data.hotTopics">
          <span :key="item.id">{{ item.name }}</span>
          <span class="redtxt">（{{ item.count }}）</span>
        </template>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">今日最高：</span>
        <span>{{ data.highest.name }}</span>
        <span class="redtxt">{{
          " " + data.highest.continuousDailyLimitNumber + " "
        }}</span>
        <span>连板</span>
      </div>
      <div
        class="more"
        @click="$router.push(`/daily_limit_analysis_detail/` + data.date)"
      >
        查看更多涨停分析 >
      </div>
    </div>
    <div class="row3">
      <div class="name border-bottom">历史涨停版分析</div>
      <div class="date">
        <div
          v-for="(item, index) in historyDates"
          :key="index"
          @click="$router.push(`/daily_limit_analysis_detail/` + item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/views/dailylimitanalysis_data.js";
export default {
  data() {
    return {
      data,
      historyDates: new Array(18).fill().map((i, index) =>
        new Date(+new Date() - index * 1000 * 60 * 60 * 24)
          .toLocaleDateString()
          .replace(/\//g, "-")
          .replace(/(-)\d-/, (v1, v2, index) => v1.replace("-", "-0"))
      ),
    };
  },
};
</script>
<style lang="scss" scoped>
.daily-limit-analysis {
  display: grid;
  grid-template-rows: 3rem auto auto;
  align-items: center;

  font-size: 1.2rem;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;

  .bluetxt {
    font-size: 1.3rem;
    font-family: PingFang SC;
    font-weight: 600;
    color: #3984f7;
    line-height: 34px;
  }
  .redtxt {
    font-family: PingFang SC;
    color: #ea3031;
    font-weight: 500;
  }
  .row1 {
    display: grid;
    font-size: 1.5rem;
    font-family: DIN Medium;
    font-weight: 500;
    color: #333333;
    border-bottom: 1px solid #f4f8fb;
    padding: 1rem;
  }
  .row2 {
    display: grid;
    grid-template-rows: 3rem 1fr 2fr 2fr 3rem;
    align-items: center;
    padding: 1rem;

    .more {
      text-align: center;
      font-size: 1.1rem;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 34px;
    }
    border-bottom: 10px #f4f8f9 solid;
  }
  .row3 {
    display: grid;
    grid-template-rows: 5rem 1fr;
    align-items: center;
    padding: 1rem;
    .name {
      font-size: 1.5rem;
      font-family: PingFang SC;
      font-weight: 800;
      color: #333333;
    }
    .date {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      grid-gap: 1rem;
      align-items: center;
      font-size: 1.5rem;
      font-family: DIN Medium;
      font-weight: 500;
      color: #333333;
      line-height: 34px;
      div {
        border-bottom: 1px solid #f4f8fb;
      }
    }
  }
}
</style>
