<template>
  <div id="home">
    <div class="search">
      <a-input-search
        size="large"
        placeholder=" 请输入股票名称或代码"
        v-model="searchKey"
        ref="searchInput"
        v-on:keyup="whenInput($event)"
        v-on:blur="closeHintsBox()"
        @search="handleZhenguClick"
      >
        <a-icon slot="prefix" type="search" class="class1" />
        <a-button shape="round" type="primary" slot="enterButton">
          <a-icon type="medicine-box class3"/> 诊股
        </a-button>
      </a-input-search>
      <div v-show="searchCauseError" class="searchCauseError">
        <span class="red class2">{{ errorMessage }}</span>
      </div>
      <div
        class="hintsbox ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft"
        v-show="showHintsBox"
      >
        <div
          tabindex="-1"
          style="overflow: auto; transform: translateZ(0px)"
          class="ant-select-dropdown-content"
        >
          <ul
            class="hintslist ant-select-dropdown-menu ant-select-dropdown-menu-vertical ant-select-dropdown-menu-root"
          >
            <li
              :key="item.code + item.name"
              v-for="(item, index) in hints"
              ref="hint"
              class="hint ant-select-dropdown-menu-item"
              v-on:click="fillInput(index)"
              v-cloak
            >
              <span>{{ item.name }}</span>
              <span style="float: right; margin-right: 30vw">{{
                item.code
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="menuicon">
      <div class="menuicon-cell" @click="handleRoute('market_popularity')">
        <img src="../assets/img/renqi.png" />
        <!-- <div class="renqi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">人气</div>
      </div>
      <div class="menuicon-cell" @click="handleRoute('daily_limit_analysis')">
        <img src="../assets/img/zhangting.png" />
        <!-- <div class="zhangting menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">涨停</div>
      </div>
      <div class="menuicon-cell" @click="handleRoute('longhu')">
        <img src="../assets/img/longhu.png" />
        <!-- <div class="longhu menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">龙虎</div>
      </div>
      <div class="menuicon-cell" @click="handleRoute('solution')">
        <img src="../assets/img/celue.png" />
        <!-- <div class="celue menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">策略</div>
      </div>
      <div class="menuicon-cell" @click="handleRoute('wkhm')">
        <img src="../assets/img/youzi.png" />
        <!-- <div class="youzi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">游资</div>
      </div>
      <div class="menuicon-cell" @click="handleRoute('search')">
        <img src="../assets/img/renqi.png" />
        <!-- <div class="youzi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">牛散</div>
      </div>
      <!--      <div class="menuicon-cell" @click="handleRoute('my_watchlist')">-->
      <!--        <img src="../assets/img/zixuan.png" />-->
      <!--        &lt;!&ndash; <div class="zixuan menuicon-cell-icon"></div> &ndash;&gt;-->
      <!--        <div class="menuicon-cell-txt">自选</div>-->
      <!--      </div>-->
    </div>
    <div class="notify blue">
      <div
        class="notify-col1 padding"
        @click="handleReview(marketReview.createDate)"
      >
        <img src="../assets/img/laba.png" />
        {{ marketReview.title }}
      </div>
      <div class="notify-col2" @click="handleRoute('review_summary')">更多</div>
    </div>
    <div class="zhishu">
      <div
        class="zhishu-cell"
        @click="viewDetail(obj.name)"
        :key="obj.id"
        v-for="obj in zhishu"
      >
        <div class="bigtxt">{{ obj.name }}</div>
        <div
          :class="{
            red: Number(obj.zhangdie) > 0,
            green: Number(obj.zhangdie) < 0,
            gray: Number(obj.zhangdie) === 0,
            bignum: true,
          }"
        >
          {{ obj.value }}
        </div>
        <div
          :class="{
            'zhishu-cell-row3': true,
            red: Number(obj.zhangdie) > 0,
            green: Number(obj.zhangdie) < 0,
            gray: Number(obj.zhangdie) === 0,
            midnum: true,
          }"
        >
          <div>
            {{ obj.zhangdie }}
          </div>
          <div>{{ obj.zhangdiefu }}</div>
        </div>
      </div>
    </div>

    <div class="shichangwendu">
      <div class="shichangwendu-row1">
        <div class="shichangwendu-row1-col1 title-txt">市场温度</div>
        <div class="shichangwendu-row1-col2">
          <div class="relative">
            <a-progress
              class="absolute"
              :width="80"
              type="circle"
              :strokeWidth="10"
              :percent="shichangwendu.wendu / 2"
            >
              <template #format="percent">
                <span>{{ shichangwendu.wendu + "℃" }}</span>
              </template>
            </a-progress>
          </div>
        </div>
        <div class="shichangwendu-row1-col3">
          <div>{{ new Date().toLocaleDateString().replace(/\//g, "-") }}</div>
          <div>持仓建议：{{ shichangwendu.suggest }}</div>
        </div>
      </div>
      <div class="shichangwendu-row2">
        <div class="relative" :key="obj.id" v-for="obj in shichangwendu.chart">
          <div class="zhuzi1">
            <div>{{ obj.value }}</div>
            <div
              :style="{ height: (obj.value / maxValueInChart) * 100 + 'px' }"
              :class="{
                'zhuzi1-bg': true,
                greenbg: obj.type === 1,
                graybg: obj.type === 2,
                redbg: obj.type === 3,
              }"
            ></div>
          </div>
        </div>
        <div class="justify-self-center">跌停</div>
        <div class="justify-self-center">>5</div>
        <div class="justify-self-center">2~5</div>
        <div class="justify-self-center">0~2</div>
        <div class="justify-self-center">平</div>
        <div class="justify-self-center">0~2</div>
        <div class="justify-self-center">2~5</div>
        <div class="justify-self-center">>5</div>
        <div class="justify-self-center">涨停</div>
      </div>
      <div
        class="shichangwendu-row3"
        :style="{
          'grid-template-columns':
            ' 16px ' +
            Math.abs(shichangwendu.die) / this.sum +
            'fr 2px ' +
            Math.abs(shichangwendu.ping) / this.sum +
            'fr 2px ' +
            Math.abs(shichangwendu.zhang) / this.sum +
            'fr 16px',
        }"
      >
        <img src="../assets/img/down.png" />
        <div class="greenbg"></div>
        <div></div>
        <div class="graybg"></div>
        <div></div>
        <div class="redbg"></div>
        <img src="../assets/img/up.png" />
      </div>
      <div class="shichangwendu-row4">
        <div class="">沪股通资金</div>
        <div
          :class="{
            red: Number(shichangwendu.hugutongzijin) > 0,
            green: Number(shichangwendu.hugutongzijin) < 0,
            gray: Number(shichangwendu.hugutongzijin) === 0,
          }"
        >
          <!--        <div class="green">-->
          {{ shichangwendu.hugutongzijin }}亿
        </div>
        <div class="">深股通资金</div>
        <div
          :class="{
            red: Number(shichangwendu.shengutongzijin) > 0,
            green: Number(shichangwendu.shengutongzijin) < 0,
            gray: Number(shichangwendu.shengutongzijin) === 0,
          }"
        >
          <!--        <div class="red">-->
          {{ shichangwendu.shengutongzijin }}亿
        </div>
      </div>
    </div>

    <div class="bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">行业板块</div>
        <div class="more-txt" @click="handleRoute('business_fund')">更多</div>
      </div>
      <div class="bankuaihangye-content">
        <div
          class="bankuaihangye-content-cell"
          :key="obj.id"
          v-for="obj in bankuaihangye"
        >
          <div class="bigtxt">{{ obj.hangye }}</div>
          <div
            :class="{
              red: Number(obj.zhangdie) > 0,
              green: Number(obj.zhangdie) < 0,
              gray: Number(obj.zhangdie) === 0,
              bignum: true,
            }"
          >
            {{ obj.zhangdie }}%
          </div>
          <div class="graytxt">
            <a @click="$router.push(`/stock_detail/` + obj.codeName.code)">{{
              obj.codeName.name
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="gainianbankuai bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">概念板块</div>
        <div class="more-txt" @click="handleRoute('concept_fund')">更多</div>
      </div>
      <div class="bankuaihangye-content">
        <div
          class="bankuaihangye-content-cell"
          :key="obj.id"
          v-for="obj in gainianbankuai"
        >
          <div class="bigtxt">{{ obj.hangye }}</div>
          <div
            :class="{
              red: Number(obj.zhangdie) > 0,
              green: Number(obj.zhangdie) < 0,
              gray: Number(obj.zhangdie) === 0,
              bignum: true,
            }"
          >
            {{ obj.zhangdie }}%
          </div>
          <div class="graytxt">
            <a @click="$router.push(`/stock_detail/` + obj.codeName.code)">{{
              obj.codeName.name
            }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="solution">
      <div class="solution-row1 title-txt">策略池</div>
      <solution class="solution-row2" />
    </div>
  </div>
</template>

<script>
import solution from "@/views/solution.vue";
import global_url from "../App.vue";
import {
  zhangtingfenxi_columns,
  zhangtingfenxi_data,
  solution_columns,
  solution_data,
  marketReview,
  zhishu,
  shichangwendu,
  bankuaihangye,
  gainianbankuai,
  // zhangtingfenxi,
} from "./home_data.js";

export default {
  name: "Home",
  components: {
    solution,
  },
  data() {
    return {
      searchKey: "",
      hints: [],
      searchCauseError: false,
      errorMessage: "请输入股票名称或代码",
      searchSelect: false,
      showHintsBox: false,
      activeNo: -1,
      zhangtingfenxi_columns,
      zhangtingfenxi_data,
      solution_columns,
      solution_data,
      marketReview,
      zhishu,
      shichangwendu,
      bankuaihangye,
      gainianbankuai,
      // zhangtingfenxi,
      solution,
      sum:
        Math.abs(shichangwendu.zhang) +
        Math.abs(shichangwendu.ping) +
        Math.abs(shichangwendu.die),
      maxValueInChart: Math.max(...shichangwendu.chart.map((i) => i.value)),
    };
  },
  activated() {
    document.getElementsByClassName("body")[0].scrollTop =
      localStorage["home"] || 0;
    // var baseUrl = "/api/admin";
    var baseUrl = global_url.baseUrl;

    //涨停分析返回数据

    fetch(baseUrl + "/home/replay.do")
      .then((r) => r.json())
      .then((r) => {
        this.zhangtingfenxi_data = r.obj;
      });
    // 复盘总结
    fetch(baseUrl + "/home/review.do")
      .then((r) => r.json())
      .then((r) => {
        this.marketReview = r.obj;
      });

    //市场指数
    fetch(baseUrl + "/home/summary.do")
      .then((r) => r.json())
      .then((r) => {
        this.zhishu = r.obj;
      });

    // 市场温度
    fetch(baseUrl + "/home/marketTemperature.do")
      .then((r) => r.json())
      .then((r) => {
        this.shichangwendu = r.obj;
        this.sum =
          Math.abs(r.obj.zhang) + Math.abs(r.obj.ping) + Math.abs(r.obj.die);
        this.maxValueInChart = Math.max(...r.obj.chart.map((i) => i.value));
      });

    //行业板块
    fetch(baseUrl + "/home/business.do")
      .then((r) => r.json())
      .then((r) => {
        this.bankuaihangye = r.obj;
      });

    //概念板块
    fetch(baseUrl + "/home/concept.do")
      .then((r) => r.json())
      .then((r) => {
        this.gainianbankuai = r.obj;
      });

    //策略名称
    fetch(baseUrl + "/home/strategy.do")
      .then((r) => r.json())
      .then((r) => {
        // console.log(r.obj)
        this.celue = r.obj;
      });

    //策略池
    fetch(baseUrl + "/home/strategyList.do")
      .then((r) => r.json())
      .then((r) => {
        // console.log(r.obj)
        this.celuechi_data = r.obj;
      });
  },
  mounted() {},

  deactivated() {},
  methods: {
    viewDetail(name) {
      let code;
      let stockSource;
      if (name == "上证指数") {
        code = "000001";
        stockSource = 1;
      } else if (name == "深证指数") {
        code = "399001";
        stockSource = 0;
      } else if (name == "中小板") {
        code = "399005";
        stockSource = 0;
      } else if (name == "创业指数") {
        code = "399006";
        stockSource = 0;
      } else if (name == "科创50") {
        code = "000688";
        stockSource = 1;
      } else if (name == "上证50") {
        code = "000016";
        stockSource = 1;
      }
      this.$router.push({
        path: "/stock_detail/" + code,
        query: { stockSource: stockSource },
      });
    },

    handleRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
    handleReview(createDate) {
      this.$router.push({
        path: "review_summary",
        query: { createDate: createDate },
      });
    },

    handleZhenguClick() {
      var code = this.searchKey;
      if (code == "" || typeof code == "undefined") {
        this.$refs.searchInput.focus();
        this.errorMessage = "请输入股票名称或代码";
        this.searchCauseError = true;
        return;
      }

      if (this.searchCauseError) {
        this.$refs.searchInput.focus();
        this.searchCauseError = false;
        return;
      }
      if (!this.searchSelect) {
        this.searchCauseError = true;
        this.$refs.searchInput.focus();
        this.errorMessage = "请选择搜索结果中匹配中的股票或代码";
        return;
      }

      console.log(code);

      this.$router.push({ name: "diagnose_report", params: { code: code } });
    },

    //-------------------------------
    //用户输入的时候
    whenInput: function ($event) {
      var len = this.hints.length;

      //Down键事件
      if ($event.keyCode == 40) {
        //划到最后一项的时候
        if (this.activeNo >= len - 1) {
          console.log("到底了");
          return;
        }

        this.activeNo++;
        return;
      }

      //Up键事件
      if ($event.keyCode == 38) {
        if (this.activeNo <= 0) {
          console.log("到顶了");
          return;
        }

        this.activeNo--;
        return;
      }

      //按Enter键
      if ($event.keyCode == 13) {
        this.fillInput(this.activeNo);
      }

      if (!this.searchKey) {
        this.closeHintsBox();
        return;
      }

      if (
        $event.keyCode !== 38 &&
        $event.keyCode !== 40 &&
        $event.keyCode !== 13
      ) {
        this.getHintsList();
      }

      //当使用v-model绑定输入框的时候，不必要采用定时器的优化方法，因为只有当输入完成之后keyword才会有值
      //clearTimeout(this.timer);
      //
      //this.timer=setTimeout(function(){
      //
      //app.getHintsList();
      //
      //},250);
    },

    //获取候选列表
    getHintsList: function () {
      // var baseUrl = "/api/admin";
      var baseUrl = global_url.baseUrl;
      fetch(baseUrl + "/home/stockCodeFuzzy.do?stockCode=" + this.searchKey)
        .then((r) => r.json())
        .then((r) => {
          if (r.obj == null) {
            this.searchCauseError = true;
            this.$refs.searchInput.focus();
            this.errorMessage = "请输入正确的股票名称或代码";
          } else if (
            r.obj.length == 1 &&
            (this.searchKey == r.obj[0].code || this.searchKey == r.obj[0].name)
          ) {
            this.searchCauseError = false;
            this.searchSelect = true;
          } else {
            this.searchCauseError = false;
            this.searchSelect = false;
          }
          this.hints = r.obj || [];
        });
      this.showHintsBox = true;
    },

    //依据hints数组下标值填充输入框
    fillInput: function (index) {
      this.searchKey = this.hints[index].code;
      this.showHintsBox = false;
      this.searchSelect = true;
      this.closeHintsBox();
    },

    //关闭候选框
    closeHintsBox: function () {
      setTimeout(() => {
        // this.hints = [];
        this.showHintsBox = false;
        this.activeNo = -1;
      }, 280);
    },
  },

  watch: {
    activeNo: function (val, oldVal) {
      console.log(val, oldVal);
      if (val != -1) {
        //这里可以替换成你想要执行的任意事件
        for (var i = 0; i < this.hints.length; i++) {
          this.$refs.hint[i].style.backgroundColor = "#fff";
        }
        this.$refs.hint[val].style.backgroundColor = "#DDD8E5";
        this.searchKey = this.hints[val].code;
      }
    },
  },

  //-------------------------------
};
</script>

<style lang="scss" scoped>
.search {
  background: url(../assets/img/top_bg.png) no-repeat;
  background-size: 100% 100%;
  padding-top: 103px;
  padding-left: 10px;
  padding-right: 10px;
  height: 211px;
  ::v-deep {
    input {
      border: none;
      background: #f7f7f7;
    }
  }
  .searchCauseError {
    padding: 0px 10px 0px 30px;
  }
}

.hintsbox {
  opacity: 0.8;
  width: 75%;
  border-radius: 15px;
  background-color: #91d5ff;
}

.zhishu {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 10px;
  border-bottom: 10px #f4f8f9 solid;
  height: 60vw;

  &-cell {
    display: grid;
    grid-template-rows: 14fr 11fr 9fr;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
    align-items: end;
    background: linear-gradient(0deg, #fef6f4, #ffffff);
    border-radius: 16px;
    align-items: center;
    &-row3 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}
.bankuaihangye {
  display: grid;
  grid-template-rows: 50px 1fr;
  border-bottom: 10px #f4f8f9 solid;
  align-items: center;

  &-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 0.5px solid #80808014;
  }
  &-content {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 10px;
    grid-gap: 20px 5px;
    &-cell {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
}
.zhangtingfenxi {
  display: grid;
  grid-template-rows: 50px 60px 1fr;
  border-bottom: 10px #f4f8f9 solid;

  &-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &-row1 {
    text-align: center;
  }
  &-row2 {
    text-align: center;
  }
  &-row3 {
    text-align: center;
  }
}

.menuicon {
  text-align: center;
  display: grid;
  grid-gap: 20px 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &-cell {
    display: grid;
    grid-template-rows: 60px 20px;
    img {
      width: 35px;
      justify-self: center;
      align-self: center;
    }
    &-icon {
      background-size: 40px;
      background-repeat: no-repeat;
      background-position-x: 26px;
      background-position-y: 16px;
    }
    &-txt {
      font-size: 11px;
    }
  }
}

.notify {
  background: #d4e5ff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
  height: 40px;
  align-items: center;
  height: 51.2px;
  align-items: center;
  font-size: 16px;
  &-col1 {
    img {
      width: 25.6px;
    }
    width: 243.2px;
  }
  &-col2 {
    justify-self: end;
  }
}
//
//.shichangwendu {
//  padding-bottom: 24px;
//  border-bottom: 10px #f4f8f9 solid;
//
//  &-row1 {
//    display: grid;
//    grid-template-columns: 3fr 3fr 4fr;
//    &-col1 {
//    }
//    &-col2 {
//      justify-self: center;
//      font-size: 1.240px;
//      font-weight: bold;
//      color: #000000b8;
//    }
//    &-col3 {
//      display: grid;
//      grid-template-rows: 1fr 1fr;
//      justify-self: end;
//      align-self: end;
//      font-size: 12.8px;
//      padding-right: 12.8px;
//      text-align: end;
//      font-size: 13.6px;
//    }
//  }
//  &-row2 {
//    display: grid;
//    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
//    grid-template-rows: 160px 16px;
//    margin: 12.8px;
//  }
//  &-row3 {
//    display: grid;
//    grid-template-columns: 16px 1fr 2px 5px 2px 1fr 16px;
//    margin: 16px 12.8px;
//    img {
//      width: 16px;
//      justify-self: center;
//      align-self: center;
//    }
//  }
//  &-row4 {
//    display: grid;
//    grid-template-columns: 1fr 3fr 1fr auto;
//    margin: 0 28.8px;
//    .red {
//      justify-self: end;
//    }
//  }
//}

.shichangwendu {
  padding-bottom: 24px;
  border-bottom: 10px #f4f8f9 solid;

  &-row1 {
    display: grid;
    grid-template-columns: 3fr 3fr 4fr;
    &-col1 {
    }
    &-col2 {
      padding: 5px 10px 45px 15px;
      //justify-self: center;
      font-size: 1.24px;
      font-weight: bold;
      color: #000000b8;
    }
    &-col3 {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-self: end;
      align-self: end;
      font-size: 12.8px;
      padding-right: 12.8px;
      text-align: end;
      font-size: 13.6px;
    }
  }
  &-row2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 160px 16px;
    margin: 12.8px;
  }
  &-row3 {
    display: grid;
    grid-template-columns: 16px 1fr 2px 5px 2px 1fr 16px;
    margin: 16px 12.8px;
    img {
      width: 16px;
      justify-self: center;
      align-self: center;
    }
  }
  &-row4 {
    display: grid;
    grid-template-columns: 1.5fr 2.6fr 1.5fr auto;
    margin: 0 28.8px;
    .red {
      justify-self: left;
    }
  }
}

.solution {
  display: grid;
  grid-template-rows: auto auto;
  &-row2 {
    // padding-left: 12.8px;
    // display: grid;
    // grid-template-columns: 1fr 1fr;
    // align-items: center;
    border-bottom: 0.5px solid #80808014;
    border-top: 0.5px solid #80808014;
  }
}
.zhuzi1 {
  position: absolute;
  bottom: 0;
  transform: translate(-50%, 0px);
  left: 50%;
  width: 50%;
  text-align: center;
}
.zhuzi1-bg {
}
.justify-self-center {
  justify-self: center;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.title-txt {
  font-size: 14px;
  font-weight: bold;
  padding-left: 12.8px;
  color: black;
}

.more-txt {
  color: #9a9a9a;
  justify-self: end;
  font-size: 16px;
  padding-right: 20px;
  align-self: center;
}
.renqi {
  background-image: url(../assets/img/renqi.png);
}
.zhangting {
  background-image: url(../assets/img/zhangting.png);
}
.longhu {
  background-image: url(../assets/img/longhu.png);
}
.zhangting {
  background-image: url(../assets/img/renqi.png);
}
.celue {
  background-image: url(../assets/img/celue.png);
}
.youzi {
  background-image: url(../assets/img/youzi.png);
}
.zixuan {
  background-image: url(../assets/img/zixuan.png);
}
</style>
<style lang="scss" scoped>
.class1 {
  font-size: 20.8px;
  color: "#c6c4c7";
}
.class2 {
  font-size: 8px;
}
.class3 {
  font-size: 19.2px;
}
::v-deep {
  .ant-input-group-addon{
    background: transparent;
  }
  .ant-input-search > input {
    border-radius: 32px !important;
  }
  .ant-input-group .ant-input-affix-wrapper {
    width: calc(100% - 10px);
  }
  .ant-input-search-enter-button
    + .ant-input-group-addon
    .ant-input-search-button {
    border-radius: 32px;
  }

  .ant-progress {
    transform: rotate(-90deg);
    -webkit-clip-path: polygon(100% 100%, 100% 0, 50% 0, 50% 100%);
    clip-path: polygon(100% 100%, 100% 0, 50% 0, 50% 100%);
  }
  .ant-progress-circle .ant-progress-text {
    transform: translate(-40%, -50%) rotate(90deg);
    font-size: 17.6px;
  }
}
</style>
