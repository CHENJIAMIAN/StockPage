<template>
  <div id="home">
    <div class="search">
      <a-input-search
        size="large"
        placeholder=" 请输入名称或代码：如友阿股份"
        @search="handleZhenguClick"
      >
        <a-icon
          slot="prefix"
          type="search"
          :style="{ fontSize: '1.3rem', color: '#c6c4c7' }"
        />
        <a-button shape="round" type="primary" slot="enterButton">
          <a-icon type="medicine-box" :style="{ fontSize: '1.2rem' }" /> 诊股
        </a-button>
      </a-input-search>
    </div>
    <div class="menuicon">
      <div class="menuicon-cell">
        <img src="../assets/img/renqi.png" />
        <!-- <div class="renqi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">人气</div>
      </div>
      <div class="menuicon-cell">
        <img src="../assets/img/zhangting.png" />
        <!-- <div class="zhangting menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">涨停</div>
      </div>
      <div class="menuicon-cell">
        <img src="../assets/img/longhu.png" />
        <!-- <div class="longhu menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">龙虎</div>
      </div>
      <div class="menuicon-cell">
        <img src="../assets/img/celue.png" />
        <!-- <div class="celue menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">策略</div>
      </div>
      <div class="menuicon-cell">
        <img src="../assets/img/youzi.png" />
        <!-- <div class="youzi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">游资</div>
      </div>
      <div class="menuicon-cell">
        <img src="../assets/img/zixuan.png" />
        <!-- <div class="zixuan menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">自选</div>
      </div>
    </div>
    <div class="notify blue">
      <div class="notify-col1">
        <img src="../assets/img/laba.png" />
        {{ new Date().toLocaleDateString() }}复盘总结
      </div>
      <div class="notify-col2">更多 ></div>
    </div>
    <div class="zhishu">
      <div class="zhishu-cell" :key="obj.id" v-for="obj in zhishu">
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
          <div>持仓建议：适宜中仓位</div>
        </div>
      </div>
      <div class="shichangwendu-row2">
        <div class="relative" :key="obj.id" v-for="obj in shichangwendu.chart">
          <div class="zhuzi1">
            <div>{{ obj.value }}</div>
            <div
              :style="{ height: (obj.value / maxValueInChart) * 150 + 'px' }"
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
        <div class="justify-self-center">>7</div>
        <div class="justify-self-center">4~7</div>
        <div class="justify-self-center">2~4</div>
        <div class="justify-self-center">0~2</div>
        <div class="justify-self-center">平</div>
        <div class="justify-self-center">0~2</div>
        <div class="justify-self-center">2~4</div>
        <div class="justify-self-center">4~7</div>
        <div class="justify-self-center">>7</div>
        <div class="justify-self-center">涨停</div>
      </div>
      <div
        class="shichangwendu-row3"
        :style="{
          'grid-template-columns':
            ' 1rem ' +
            Math.abs(shichangwendu.die) / this.sum +
            'fr 2px ' +
            Math.abs(shichangwendu.ping) / this.sum +
            'fr 2px ' +
            Math.abs(shichangwendu.zhang) / this.sum +
            'fr 1rem',
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
        <div class="">泸股通资金</div>
        <div class="green">{{ shichangwendu.hugutongzijin }}亿</div>
        <div class="">深股通资金</div>
        <div class="red">{{ shichangwendu.shengutongzijin }}亿</div>
      </div>
    </div>

    <div class="bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">板块行业</div>
        <div class="more-txt">更多></div>
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
          <div class="graytxt">{{ obj.gongsi }}</div>
        </div>
      </div>
    </div>

    <div class="gainianbankuai bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">概念板块</div>
        <div class="more-txt">更多></div>
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
          <div class="graytxt">{{ obj.gongsi }}</div>
        </div>
      </div>
    </div>

    <div class="zhangtingfenxi">
      <div class="zhangtingfenxi-head">
        <div class="title-txt">涨停分析</div>
        <div class="more-txt">更多></div>
      </div>
      <a-tabs default-active-key="1" size="large">
        <a-tab-pane key="1" tab="昨日涨停(100)">昨日涨停(100)</a-tab-pane>
        <a-tab-pane key="2" tab="今日连板(25)"> </a-tab-pane>
        <a-tab-pane key="3" tab="最高6连板"></a-tab-pane>
      </a-tabs>
      <div class="zhangtingfenxi-row1"></div>
      <a-table
        :pagination="false"
        :columns="zhangtingfenxi_columns"
        :data-source="zhangtingfenxi_data"
        rowKey="id"
      >
        <div slot="代码名称" slot-scope="代码名称">
          <div class="bigtxt">{{ 代码名称.名称 }}</div>
          <div>{{ 代码名称.代码 }}</div>
        </div>
        <div slot="涨跌幅" slot-scope="涨跌幅">
          <div class="bignum red">{{ 涨跌幅 }}%</div>
        </div>
        <div slot="连扳天数" slot-scope="连扳天数">
          <div class="bignum red">{{ 连扳天数 }}</div>
        </div>
        <div slot="概念" slot-scope="概念">
          <div class="bigtxt">{{ 概念 }}</div>
        </div>
      </a-table>
    </div>

    <div class="celuechi">
      <div class="celuechi-row1 title-txt">策略池</div>
      <div class="celuechi-row2">
        <div class="graytxt">短线收割机</div>
        <div class="more-txt">更多></div>
      </div>
      <a-table
        :pagination="false"
        :columns="celuechi_columns"
        :data-source="celuechi_data"
        rowKey="id"
      >
        <div slot="代码名称" slot-scope="代码名称">
          <div class="bigtxt">{{ 代码名称.名称 }}</div>
          <div>{{ 代码名称.代码 }}</div>
        </div>
        <div slot="涨跌幅" slot-scope="涨跌幅">
          <div
            :class="{
              red: Number(涨跌幅) > 0,
              green: Number(涨跌幅) < 0,
              gray: Number(涨跌幅) === 0,
              bignum: true,
            }"
          >
            {{ 涨跌幅 }}%
          </div>
        </div>
        <div slot="现价" slot-scope="现价, record">
          <div
            :class="{
              red: Number(record.涨跌幅) > 0,
              green: Number(record.涨跌幅) < 0,
              gray: Number(record.涨跌幅) === 0,
              bignum: true,
            }"
          >
            {{ 现价 }}
          </div>
        </div>
        <div slot="行业" slot-scope="行业">
          <div class="bigtxt">{{ 行业 }}</div>
        </div>
      </a-table>
    </div>
  </div>
</template>

<script>
import {
  zhangtingfenxi_columns,
  zhangtingfenxi_data,
  celuechi_columns,
  celuechi_data,
  zhishu,
  shichangwendu,
  bankuaihangye,
  gainianbankuai,
  zhangtingfenxi,
  celuechi,
} from "./home_data.js";

export default {
  name: "Home",
  data() {
    return {
      zhangtingfenxi_columns,
      zhangtingfenxi_data,
      celuechi_columns,
      celuechi_data,
      zhishu,
      shichangwendu,
      bankuaihangye,
      gainianbankuai,
      zhangtingfenxi,
      celuechi,
      sum:
        Math.abs(shichangwendu.zhang) +
        Math.abs(shichangwendu.ping) +
        Math.abs(shichangwendu.die),
      maxValueInChart: Math.max(...shichangwendu.chart.map((i) => i.value)),
    };
  },
  created() {
    // fetch("http://120.79.39.244:53689/gis/hengli/tileset.json")
    //   .then((r) => r.json())
    //   .then((r) => {
    //   });
  },
  mounted() {},
  methods: {
    handleZhenguClick() {
      this.$router.push("/diagnose_report");
    },
  },
};
</script>


<style lang="scss" scoped>
.search {
  margin: 15pt;
  ::v-deep {
    input {
      border: none;
      background: #f7f7f7;
    }
  }
}

.zhishu {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 10px;
  border-bottom: 10px #f4f8f9 solid;
  height: 60vw;

  &-cell {
    display: grid;
    grid-template-rows: 14fr 11fr 9fr;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.05);
    align-items: end;
    background: linear-gradient(0deg, #fef6f4, #ffffff);
    border-radius: 1rem;
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
    grid-gap: 5px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &-cell {
    display: grid;
    grid-template-rows: 60px 20px;
    img {
      width: 40px;
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
      font-size: 12pt;
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
  height: 3.2rem;
  align-items: center;
  font-size: 1.2rem;
  &-col1 {
    img {
      width: 1.8rem;
    }
  }
  &-col2 {
    justify-self: end;
  }
}
.shichangwendu {
  padding-bottom: 1.5rem;
  border-bottom: 10px #f4f8f9 solid;

  &-row1 {
    display: grid;
    grid-template-columns: 3fr 3fr 4fr;
    &-col1 {
    }
    &-col2 {
      justify-self: center;
      font-size: 1.15rem;
      font-weight: bold;
      color: #000000b8;
    }
    &-col3 {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-self: end;
      align-self: end;
      font-size: 0.8rem;
      padding-right: 0.8rem;
      text-align: end;
      font-size: 0.85rem;
    }
  }
  &-row2 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 10rem 1rem;
    margin: 0.8rem;
  }
  &-row3 {
    display: grid;
    grid-template-columns: 1rem 1fr 2px 5px 2px 1fr 1rem;
    margin: 1rem 0.8rem;
    img {
      width: 1rem;
      justify-self: center;
      align-self: center;
    }
  }
  &-row4 {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr auto;
    margin: 0 1.8rem;
    .red {
      justify-self: end;
    }
  }
}
.celuechi {
  display: grid;
  grid-template-rows: 3rem 4rem auto 1fr;
  &-row2 {
    padding-left: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
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
  font-size: 18pt;
  font-weight: bold;
  padding-left: 0.8rem;
  color: black;
}

.more-txt {
  color: #9a9a9a;
  justify-self: end;
  font-size: 1rem;
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
::v-deep {
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
    font-size: 1.1rem;
  }
}
</style>
