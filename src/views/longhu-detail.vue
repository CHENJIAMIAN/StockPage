// 龙虎榜详情
<template>
  <div class="longhu-detail">
     <!-- <div class="row0">
      {{ data.name + " " + data.market + ":" + data.code }}
    </div> -->
    <!-- 头 -->
    <div class="row1">
      <div class="red">
        <div class="price">{{ data.price }}</div>
<!--        <div class="quote">-->
        <div :class="{
            red: Number(data.quoteChangePercent) > 0,
            green: Number(data.quoteChangePercent) < 0,
            gray: Number(data.quoteChangePercent) === 0,
            bignum: true,
          }">
          <span style="padding-right:16px;"
            >{{ data.quoteChangePercent }}%</span
          >
          <span>{{ data.quoteChangeAmount }}</span>
        </div>
      </div>
      <div class="row1-col2">
        <div class="row1-col2-row1">
          <span>今开：</span>
          <span :class="{
                red: Number(data.quoteChangePercent) > 0,
            green: Number(data.quoteChangePercent) < 0,
            gray: Number(data.quoteChangePercent) === 0}">{{ data.openPrice }}</span>
		  <span style="padding-left:5px;">最高：</span>
          <span :class="{
                red: Number(data.quoteChangePercent) > 0,
            green: Number(data.quoteChangePercent) < 0,
            gray: Number(data.quoteChangePercent) === 0}">{{ data.highest }}</span>
          <!--          <span>最低：</span>-->
          <!--          <span class="red">{{ data.lowest }} </span>-->
          <!--          <span>成交量：</span>-->
          <!--          <span >{{ data.tradeover }} 万手 </span>-->

        </div>
        <div class="row1-col2-row1">
          <span>最低：</span>
          <span :class="{
                red: Number(data.quoteChangePercent) > 0,
            green: Number(data.quoteChangePercent) < 0,
            gray: Number(data.quoteChangePercent) === 0}">{{ data.lowest }} </span>
          <span>换手率：</span>
          <span>{{ data.turnoverRate }}%</span>
        </div>
        <div class="row1-col2-row1">
          <span>成交量:</span>
          <span >{{ data.tradeover }}<span style="font-size: 1px">{{ data.tradeoverUnit}} </span> </span>
          <span>成交额:</span>
          <span>{{ data.tradeVolume }}<span style="font-size: 1px">{{ data.tradeVolumeUnit}}</span></span>
        </div>
      </div>

<!--      <div class="row1-col2">-->
<!--        <div class="row1-col2-row1">-->
<!--          <span>总值:</span>-->
<!--          <span>{{ data.totalValue + data.totalValueUnit }}</span>-->
<!--          <span style="padding-left:16px;">主营:</span>-->
<!--          <span>{{ data.mainBusiness }}</span>-->
<!--        </div>-->
<!--        <div class="row1-col2-row2">-->
<!--          <span>流值:</span>-->
<!--          <span>{{ data.circulationValue + data.circulationValueUnit }}</span>-->
<!--          <span style="padding-left:16px;">牛散:</span>-->
<!--          <span class="blue" :key="item.id" v-for="item in data.awesomeRetail">-->
<!--            {{ item.name }}-->
<!--          </span>-->
<!--          <span class="more blue">更多</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <!-- 图表 -->
    <div class="row2">
      <a-tabs default-active-key="2" size="small">
        <a-tab-pane key="1" tab="分时">
          <div class="chart">
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <!--              <div id="main" style="width: 100%;height:300px;"></div>-->
            <img :src="minute_img_src" ref="img" width="100%" />
          </div>

        </a-tab-pane>
        <a-tab-pane key="2" tab="日K">
          <div class="longhu">
            <div class="chart">
              <img :src="day_month_img_src" ref="img" width="100%" />
            </div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="日K(1季)">
          <div class="longhu">
            <div class="chart">
              <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
              <!--              <div id="main" style="width: 100%;height:300px;"></div>-->
              <img :src="season_img_src" ref="img" width="100%" />
            </div>

          </div>
        </a-tab-pane>
        <a-tab-pane key="4" tab="日K(半年)">
          <div class="longhu">
            <div class="chart">
              <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
              <!--              <div id="main" style="width: 100%;height:300px;"></div>-->
              <img :src="half_year_img_src" ref="img" width="100%" />
            </div>

          </div>
        </a-tab-pane>
        <a-tab-pane key="5" tab="周K">
          <div class="longhu">
            <div class="chart">
              <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
              <!--              <div id="main" style="width: 100%;height:300px;"></div>-->
              <img :src="week_img_src" ref="img" width="100%" />
            </div>

          </div>
        </a-tab-pane>
        <a-tab-pane key="6" tab="月K">
          <div class="longhu">
            <div class="chart">
              <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
              <!--              <div id="main" style="width: 100%;height:300px;"></div>-->
              <img :src="month_img_src" ref="img" width="100%" />
            </div>

          </div>
        </a-tab-pane>

<!--        <a-tab-pane key="3" tab="股东"></a-tab-pane>-->
<!--        <a-tab-pane key="4" tab="互动"></a-tab-pane>-->
<!--        <a-tab-pane key="5" tab="财务"></a-tab-pane>-->
<!--        <a-tab-pane key="6" tab="主营"></a-tab-pane>-->
      </a-tabs>
    </div>
    <!-- 蓝条 -->
    <div class="detail">
      <div class="grid"
           v-for="rankDetail in data.stockRankDetail"
           :key="rankDetail.id">
          <div class="row3">{{ rankDetail.msg }}</div>
          <div class="row4">
            <div class="grid"
                 v-for="buyAndSell in rankDetail.maximumBuyAndSell"
                 :key="buyAndSell.id">
                <div class="name">{{ buyAndSell.name }}</div>
                <div class="item" v-for="item in buyAndSell.list" :key="item.id">
                  <div>
                    <span class="blue">{{ item.name }}</span>
                    <span class="red" @click="viewDetail(item.idleId, null)"> {{item.idleName}}</span>
                  </div>
                  <div class="buy-sale">
                    <div class="red">{{ item.buy + item.buyUnit }}</div>
                    <div class="green">{{ item.sale + item.saleUnit }}</div>
                  </div>
                </div>
            </div>
          </div>

      </div>

    </div>
<!--    <div class="row3">{{ data.msg }}</div>-->
    <!-- 买入 卖出 -->
<!--    <div class="row4">-->
<!--      <div-->
<!--        class="grid"-->
<!--        v-for="maximumBuyAndSell in data.maximumBuyAndSell"-->
<!--        :key="maximumBuyAndSell.id"-->
<!--      >-->
<!--        <div class="name">{{ maximumBuyAndSell.name }}</div>-->
<!--        <div class="item" v-for="item in maximumBuyAndSell.list" :key="item.id">-->
<!--          <div>-->
<!--            <span class="blue">{{ item.name }}</span>-->
<!--            <span class="gray">历史</span>-->
<!--          </div>-->
<!--          <div class="buy-sale">-->
<!--            <div class="red">{{ item.buy + item.buyUnit }}</div>-->
<!--            <div class="green">{{ item.sale + item.saleUnit }}</div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { data } from "@/views/longhudetail_data.js";
import theOption from "@/views/klinechart_data.js";
import global_url from "../App.vue"
export default {
  data() {
    return {
      today: new Date().toLocaleDateString().replace(/\//g, "-"),
      data,
      minute_img_src:"http://img1.money.126.net/chart/hs/time/540x360/1002277.png",
      day_month_img_src:"http://img1.money.126.net/chart/hs/kline/day/30/1002277.png",
      season_img_src:"http://img1.money.126.net/chart/hs/kline/day/90/1002277.png",
      half_year_img_src:"http://img1.money.126.net/chart/hs/kline/day/180/1002277.png",
      week_img_src:"http://img1.money.126.net/chart/hs/kline/week/1002277.png",
      month_img_src:"http://img1.money.126.net/chart/hs/kline/month/1002277.png",

      historyDates: new Array(6).fill().map((i, index) =>
        new Date(+new Date() - index * 1000 * 60 * 60 * 24)
          .toLocaleDateString()
          .replace(/\//g, "-")
          .replace(/(-)\d-/, (v1, v2, index) => v1.replace("-", "-0"))
      ),
    };
  },

  activated() {
    document.getElementsByClassName('body')[0].scrollTop = 0;
    var createDate= this.$route.query.createDate
    var stockCode = this.$route.query.code
    this.today = createDate
    if (createDate == null || createDate == 'undefined'){
      createDate = ""
    }
    // console.log(this.$route.query)
    var baseUrl = global_url.baseUrl
    fetch(baseUrl+"/api/rank/rankDetail.do?stockCode="+stockCode+"&createDate="+createDate)
        .then((r) => r.json())
        .then((r) => {
          this.data=r.obj
          this.$emit("title", this.data.name + " " + this.data.market + ":" + this.data.code);

          var stockSource = 0
          if (r.obj.market == 'SZ'){
            stockSource = 1
          }
          this.minute_img_src="http://img1.money.126.net/chart/hs/time/540x360/"+stockSource+""+r.obj.code+".png"
          this.day_month_img_src="http://img1.money.126.net/chart/hs/kline/day/30/"+stockSource+""+r.obj.code+".png"
          this.season_img_src="http://img1.money.126.net/chart/hs/kline/day/90/"+stockSource+""+r.obj.code+".png"
          this.half_year_img_src="http://img1.money.126.net/chart/hs/kline/day/180/"+stockSource+""+r.obj.code+".png"
          this.week_img_src="http://img1.money.126.net/chart/hs/kline/week/"+stockSource+""+r.obj.code+".png"
          this.month_img_src="http://img1.money.126.net/chart/hs/kline/month/"+stockSource+""+r.obj.code+".png"

        });
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // var myChart = this.$echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    // let option = theOption; //import的命名不能与本地变量名重复,否则本地变量会覆盖掉import的变量
    // 使用刚指定的配置项和数据显示图表。
    // myChart.setOption(option);
  },
  methods: {
    viewDetail(idleFundId,createDate){
      if(createDate == null || createDate ==""){
        createDate = this.today
      }
      if(idleFundId == null || idleFundId == ""){
        return ;
      }
      console.log(createDate)
      this.$router.push({path:"/wkhmd/",query:{idleFundId:idleFundId,createDate:createDate}})
    },


  },
};
</script>

<style lang="scss" scoped>
.longhu-detail {
  display: grid;
  .row0 {
    padding: 16px;
    background: #3984f7;
    font-size:32px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #ffffff;
  }
  .row1 {
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-bottom: 10px #f4f8f9 solid;
    padding: 16px;
    .red {
      .price {
        font-size: 24px;
        font-family: DIN Medium;
        font-weight: 500;
        color: #ea3031;
      }
      .quote {
        font-size: 16px;
        font-family: DIN Medium;
        font-weight: 400;
        color: #ea3031;
        line-height: 34px;
      }
    }
    &-col2 {
      justify-self: end;
      font-size: 14.4px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 34px;
      &-row1 {
      }
      &-row2 {
        .more {
          margin-left: 5px;
          border: 1.5px solid #3984f7;
          border-radius: 4px;
          padding: 1px;
        }
      }
    }
  }

  .row2 {
    display: grid;
    padding: 16px;
    .longhu {
      display: grid;
      grid-template-rows: 1fr auto;
      // grid-template-rows: auto 1fr auto;
      align-items: center;
      .head {
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        img {
          width: 16px;
        }
      }
      .chart {
      }
      .date {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 16px;
        justify-items: center;
        align-items: center;
        font-size: 17.6px;
        font-family: DIN Medium;
        font-weight: 600;
        color: #333333;
        line-height: 20.8px;
      }
    }
  }

  .detail{
    .grid{

      .row3 {
        height: 48px;
        line-height: 24px;
        padding-left: 16px;
        font-size: 16px;
        font-weight: 500;
        color: #2874e8;
        background: #d4e5ff;
      }

      .row4 {
        display: grid;
        padding: 16px;
        .name {
          font-size: 22.4px;
          font-family: PingFang SC;
          font-weight: 800;
          color: #333333;
          line-height: 34px;
        }
        .grid {
          display: grid;
          align-items: center;
          grid-template-rows:64px;
          grid-gap: 16px;
          .item {
            display: grid;
            grid-template-columns: 240px 1fr;
            align-items: center;
            border-bottom: 1px solid #80808014;
            .blue {
              font-size: 19.2px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #2874e8;
            }
            .gray {
              padding-left: 16px;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 500;
              color: #999999;
            }
            .buy-sale {
              justify-self: end;
              display: grid;
              justify-items: end;
              font-size: 16px;
              font-family: DIN Medium;
              font-weight: 400;
            }
          }
        }
      }
    }

  }

  //.row3 {
  //  height: 48px;
  //  line-height: 48px;
  //  padding-left: 16px;
  //  font-size: 16px;
  //  font-weight: 500;
  //  color: #2874e8;
  //  background: #d4e5ff;
  //}

  //.row4 {
  //  display: grid;
  //  padding: 16px;
  //  .name {
  //    font-size: 22.4px;
  //    font-family: PingFang SC;
  //    font-weight: 800;
  //    color: #333333;
  //    line-height: 34px;
  //  }
  //  .grid {
  //    display: grid;
  //    align-items: center;
  //    grid-template-rows:64px;
  //    grid-gap: 16px;
  //    .item {
  //      display: grid;
  //      grid-template-columns: 240px 1fr;
  //      align-items: center;
  //      border-bottom: 1px solid #80808014;
  //      .blue {
  //        font-size: 19.2px;
  //        font-family: PingFang SC;
  //        font-weight: 500;
  //        color: #2874e8;
  //      }
  //      .gray {
  //        padding-left: 16px;
  //        font-size: 16px;
  //        font-family: PingFang SC;
  //        font-weight: 500;
  //        color: #999999;
  //      }
  //      .buy-sale {
  //        justify-self: end;
  //        display: grid;
  //        justify-items: end;
  //        font-size: 16px;
  //        font-family: DIN Medium;
  //        font-weight: 400;
  //      }
  //    }
  //  }
  //}
}
</style>
