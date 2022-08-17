<template>
  <div class="zhenduanbaogao">
    <div class="head">
      <div class="name">{{ data.name }}</div>
      <div class="code">{{ "(" + data.code + ")" }}</div>
      <div class="score">
        综合诊断:<span>{{ data.score }}分</span>
      </div>
      <div class="bitThan">打败了{{ data.bitThan }}的股票!</div>
      <div class="circle circle3">
        <div class="circle circle2">
          <div class="circle circle1">
            <div class="score-incircle">{{ data.score }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="suggest">
      <span :class="{ active: data.suggest === '卖出' }">卖出</span>
      <span :class="{ active: data.suggest === '减持' }">减持</span>
      <span :class="{ active: data.suggest === '中性' }">中性</span>
      <span :class="{ active: data.suggest === '增持' }">增持</span>
      <span :class="{ active: data.suggest === '买入' }">买入</span>
    </div>
    <div class="qushi">
      <div class="grid" :key="obj.id" v-for="obj in data.qushi">
        <div class="row1">
          <img src="../assets/img/tb0.png" />
          <div>{{ obj.name }}</div>
          <div class="bottom-orange"></div>
          <div class="cirle-orange"></div>
          <div class="cirle-orange"></div>
        </div>
        <div class="row2">{{ obj.txt }}</div>
      </div>
    </div>
    <div class="content">
      <div class="summary">
        {{ data.summary }}
      </div>
      <div class="chart">
        <!-- <div :key="obj.id" v-for="obj in data.zhengu">{{ obj.score }}</div> -->
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main"></div>
      </div>
      <div class="zhengu">
        <div class="zhengu-grid" :key="obj.id" v-for="obj in data.zhengu">
          <div class="zhengu-grid-head">
            <div class="id">{{ obj.id }}</div>
            <div class="type">{{ obj.type }}</div>
          </div>
          <div class="zhengu-grid-content">{{ obj.content }}</div>
        </div>
      </div>
      <div class="iframe-class">
        <iframe :src="html_src" ref="iframe" width="100%"></iframe>
      </div>
    </div>
    <div class="riskTip">{{ data.riskTip }}</div>
  </div>
</template>
<script>
import { data } from "./zhenduanbaogao_data.js";
import global_url from "../App.vue";
export default {
  data() {
    return {
      data,
      html_src:
        "http://m.money.163.com/stock/1002277.html?from=singlemessage&isappinstalled=0",
    };
  },
  created() {
    var code = this.$route.params.code;
    // var baseUrl = global_url.baseUrl;
    var baseUrl = "/api/admin";
    if (typeof code == "undefined") {
      code = "002277";
    }
    fetch(baseUrl + "/home/doctor.do?stockCode=" + code)
      .then((r) => r.json())
      .then((r) => {
        if (r.obj == null) {
          alert("输入数据有误,将用默认数据展示");
          this.html_src =
            "http://m.money.163.com/stock/1002277.html?from=singlemessage&isappinstalled=0";
        } else {
          this.data = r.obj;
          // http://m.money.163.com/stock/1002277.html?from=singlemessage&isappinstalled=0
          this.html_src =
            "http://m.money.163.com/stock/" +
            r.obj.stockSource +
            "" +
            r.obj.code +
            ".html?from=singlemessage&isappinstalled=0";
        }
      });
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      tooltip: {},
      xAxis: {
        axisLabel: {
          color: "black",
          fontSize: 14,
        },
        axisTick: {
          show: false,
        },
        data: this.data.zhengu.map((i) => i.type),
        axisLine: {
          //横轴样式
          lineStyle: {
            color: "orange",
          },
        },
      },
      yAxis: {
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          //网格线
          lineStyle: {
            color: "orange",
            width: 0.3,
          },
          show: true, //隐藏或显示
        },

        axisLine: {
          //横轴样式
          lineStyle: {
            color: "orange",
          },
        },
      },
      series: [
        {
          name: "分数",
          type: "bar",
          data: this.data.zhengu.map((i) => i.score),
          barWidth: 35, //柱状宽度
          itemStyle: {
            //柱状颜色和圆角
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(252,130,26,1)",
              },
              {
                offset: 1,
                color: "rgba(255,182,41,1)",
              },
            ]),
          },
          label: {
            show: true,
            position: "top",
            color: "orange",
            formatter: "{@分数}分",
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>
<style lang="scss" scoped>
#main {
  width: 100%;
  height: 300px;
}
.zhenduanbaogao {
  font-family: mFont;
  background: #f2f7fb;
  display: grid;
  grid-template-rows: 352px 50px 15fr auto auto;
  .head {
    background-image: url(../assets/img/topbg0.png);
    background-size: cover;
    display: grid;
    grid-auto-rows: 40px 88px 24px 8px;
    grid-gap: 10px;
    color: white;
    padding-left: 16px;
    padding-top: 32px;
    .name {
      font-size: 40px;
      font-weight: bold;
    }
    .code {
      font-size: 24px;
    }
    .score {
      font-size: 24px;
      span {
        color: #ffee30;
      }
    }
    .bitThan {
      font-size: 24px;
    }
    .circle {
      width: 0;
      height: 0;
      border-radius: 50%;
    }
    .circle1 {
      border: 56px solid white;
      position: absolute;
      left: -56px;
      top: -56px;
    }
    .circle2 {
      border: 80px solid #81b1fa;
      position: absolute;
      left: -80px;
      top: -80px;
    }
    .circle3 {
      position: absolute;
      border: 88px solid #619df9;
      top: 33px;
      right: 9px;
    }
    .score-incircle {
      color: dodgerblue;
      font-weight: bold;
      font-size: 50px;
      position: absolute;
      top: -40px;
      right: -30px;
    }
  }
  .suggest {
    transform: translate(0, -35px);
    background-image: url(../assets/img/topbar0.png);
    background-size: cover;
    color: white;
    text-align: center;
    margin: 0 10vw;
    font-size: 19.2px;
    span {
      margin: 4.8px;
      line-height: 48px;
    }
    .active {
      color: #ffee30;
    }
  }
  .qushi {
    background: white;
    margin: 0 8px;
    padding: 16px;
    border-radius: 8px;
    .grid {
      display: grid;
      grid-template-rows: 1fr auto;
      .row1 {
        display: grid;
        grid-template-columns: 16px 2fr 1fr 10px 5px;
        font-size: 19.2px;
        color: orange;
        font-weight: bold;
        grid-gap: 10px;
        align-items: center;
        img {
          width: 16px;
          align-self: center;
        }
        .bottom-orange {
          transform: translate(0, -85%);
          border-bottom: 1px orange solid;
          width: 40vw;
        }
        .cirle-orange {
          width: 0;
          height: 0;
          border: 3px orange solid;
          border-radius: 50%;
        }
      }
      .row2 {
        color: black;
        padding: 8px 24px;
      }
    }
  }
  .content {
    background: white;
    margin: 16px 8px;
    padding: 16px;
    border-radius: 8px;
    color: black;
    .summary {
      padding: 16px 8px;
      line-height: 24px;
    }
    .chart {
      display: grid;
      grid-auto-flow: column;
    }
    .zhengu {
      display: grid;
      grid-gap: 20px;
      &-grid {
        background: #fff6ec;
        position: relative;
        border: 1px solid orange;
        &-head {
          display: grid;
          grid-template-columns: 48px auto;
          align-items: center;
          grid-gap: 8px;
          .id {
            line-height: 32px;
            height: 32px;
            width: 48px;
            background: #ff7e1d;
            color: white;
            text-align: center;
            font-size: 19.2px;
            font-weight: bold;
          }
          .type {
            font-size: 19.2px;
            font-weight: 500;
          }
        }
        &-content {
          padding: 8px 16px;
          line-height: 24px;
        }
      }
    }
    .iframe-class {
      padding: 16px 1.6px 8px 1.6px;
      display: grid;
      grid-gap: 20px;
      position: relative;
    }
  }
  .riskTip {
    font-size: 12.8px;
    color: gray;
    text-align: center;
    height: 32px;
  }
}
</style>
