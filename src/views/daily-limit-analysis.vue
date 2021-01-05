<template>
  <div class="daily-limit-analysis">
    <div class="row1">{{ data.date }}</div>
    <div class="row2">
      <div class="border-bottom">
        <span class="bluetxt">两市涨停数：</span>
        <span class="redtxt"  @click="conditionClick(data.date,null,null,null,null)">{{ data.count }}只</span>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">涨幅20%：</span>
        <span class="redtxt" @click="conditionClick(data.date,'quote_change',19.00,null,null)">{{ data.increase20Percent }}只</span>
<!--        <span class="bluetxt">，涨幅10%：</span>-->
<!--        <span class="redtxt" @click="conditionClick(data.date,'quote_change',10,20,null)">{{ data.increase10Percent }}只</span>-->
      </div>
      <div class="border-bottom">
<!--        <span class="bluetxt">涨幅20%：</span>-->
<!--        <span class="redtxt" @click="conditionClick(data.date,'quote_change',20,null,null)">{{ data.increase20Percent }}只</span>-->
        <span class="bluetxt">涨幅10%：</span>
        <span class="redtxt" @click="conditionClick(data.date,'quote_change',9.00,19.00,null)">{{ data.increase10Percent }}只</span>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">热点题材：</span>
        <template v-for="item in data.hotTopics">
          <span :key="item.id">{{ item.name }}：</span>
          <span class="redtxt" @click="conditionClick(data.date,null,null,null, item.name)">{{ item.count }}只 </span>
        </template>
      </div>
      <div class="border-bottom">
        <span class="bluetxt">今日最高：</span>
        <span>{{ data.highest.name }}</span>
        <span class="redtxt" @click="conditionClick(data.date,
        'continue_limitup',data.highest.continuousDailyLimitNumber,null)">{{
          " " + data.highest.continuousDailyLimitNumber + " "
        }}</span>
        <span>连板</span>
      </div>
      <div
        class="more"
        @click="conditionClick(data.date,null,null,null, null)"

      >
<!--        @click="$router.push(`/daily_limit_analysis_detail/` + data.date)"-->
        查看更多当日涨停分析 >
      </div>
    </div>
    <div class="row3">
      <div class="name border-bottom">历史涨停板分析</div>
      <div class="date">
        <div
          v-for="(item, index) in historyDates"
          :key="index"
          @click="conditionClick(item, null, null, null, null)"
        >
<!--          @click="$router.push(`/daily_limit_analysis_detail/` + item)"-->
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { data } from "@/views/dailylimitanalysis_data.js";
import global_url from "../App.vue"
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
  activated() {
    document.getElementsByClassName('body')[0].scrollTop =localStorage['daily_limit_analysis'] || 0;
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/replay/statistic.do")
        .then((r) => r.json())
        .then((r) => {
          this.data = r.obj
        });

    fetch(baseUrl+"/api/replay/replayDistinctDate.do")
        .then((r) => r.json())
        .then((r) => {
          this.historyDates = r.obj
        });


  },
  methods:{
    conditionClick(date, countValue, beginValue, endValue, subject){
      this.$router.push({
        path: "/daily_limit_analysis_detail/",
        query: {
          createDate:date,
          countValue:countValue,
          beginValue:beginValue,
          endValue:endValue,
          subject:subject

        },
      }).catch(err => {err});
    },

  }

};
</script>
<style lang="scss" scoped>
.daily-limit-analysis {
  display: grid;
  grid-template-rows: 48px auto auto;
  align-items: center;

  font-size: 19.2px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;

  .bluetxt {
    font-size: 20.8px;
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
    font-size: 24px;
    font-family: DIN Medium;
    font-weight: 500;
    color: #333333;
    border-bottom: 1px solid #f4f8fb;
    padding: 16px;
  }
  .row2 {
    display: grid;
    //grid-template-rows: 48px 1fr 2fr 2fr 48px;
    grid-template-rows: 48px 48px 48px 48px 48px;
    align-items: center;
    padding: 16px;

    .more {
      text-align: center;
      font-size: 17.6px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 34px;
    }
    border-bottom: 10px #f4f8f9 solid;
  }
  .row3 {
    display: grid;
    grid-template-rows: 80px 1fr;
    align-items: center;
    padding: 16px;
    .name {
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #333333;
    }
    .date {
      display: grid;
      grid-template-columns: 1fr 1fr auto;
      grid-gap: 16px;
      align-items: center;
      font-size: 24px;
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
