<template>
  <div id="app">
    <div class="search">
      <a-input-search placeholder=" 请输入名称或代码：如友阿股份">
        <a-icon slot="prefix" type="search" />
        <a-button type="primary" slot="enterButton">
          诊股
        </a-button>
      </a-input-search>
    </div>
    <div class="menuicon">
      <div class="menuicon-cell">
        <img src="./assets/img/renqi.png" />
        <!-- <div class="renqi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">人气</div>
      </div>
      <div class="menuicon-cell">
        <img src="./assets/img/zhangting.png" />
        <!-- <div class="zhangting menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">涨停</div>
      </div>
      <div class="menuicon-cell">
        <img src="./assets/img/longhu.png" />
        <!-- <div class="longhu menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">龙虎</div>
      </div>
      <div class="menuicon-cell">
        <img src="./assets/img/celue.png" />
        <!-- <div class="celue menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">策略</div>
      </div>
      <div class="menuicon-cell">
        <img src="./assets/img/youzi.png" />
        <!-- <div class="youzi menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">游资</div>
      </div>
      <div class="menuicon-cell">
        <img src="./assets/img/zixuan.png" />
        <!-- <div class="zixuan menuicon-cell-icon"></div> -->
        <div class="menuicon-cell-txt">自选</div>
      </div>
    </div>
    <div class="notify blue">
      <div class="notify-col1">
        <img src="./assets/img/laba.png" />
        2020/09/09复盘总结
      </div>
      <div class="notify-col2">更多 ></div>
    </div>
    <div class="zhishu">
      <div class="zhishu-cell">
        <div class="bigtxt">上证指数</div>
        <div class="red bignum">3380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>
      <div class="zhishu-cell">
        <div class="bigtxt">深证指数</div>
        <div class="red bignum">12380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>

      <div class="zhishu-cell">
        <div class="bigtxt">中小板</div>
        <div class="red bignum">3380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>

      <div class="zhishu-cell">
        <div class="bigtxt">创业指数</div>
        <div class="red bignum">3380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>

      <div class="zhishu-cell">
        <div class="bigtxt">科创50</div>
        <div class="red bignum">3380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>

      <div class="zhishu-cell">
        <div class="bigtxt">上证59</div>
        <div class="red bignum">3380.68</div>
        <div class="zhishu-cell-row3 red midnum">
          <div>
            +16.78
          </div>
          <div>+0.50%</div>
        </div>
      </div>
    </div>

    <div class="shichangwendu">
      <div class="shichangwendu-row1">
        <div class="shichangwendu-row1-col1 title-txt">市场温度</div>
        <div class="shichangwendu-row1-col2">7.2℃</div>
        <div class="shichangwendu-row1-col3">
          <div>2020-8-24</div>
          <div>持仓建议：适宜中仓位</div>
        </div>
      </div>
      <div class="shichangwendu-row2">
        <div class="relative"><div class="zhuzi1 greenbg"></div></div>
        <div class="relative"><div class="zhuzi1 greenbg"></div></div>
        <div class="relative"><div class="zhuzi1 greenbg"></div></div>
        <div class="relative"><div class="zhuzi1 greenbg"></div></div>
        <div class="relative"><div class="zhuzi1 greenbg"></div></div>
        <div class="relative"><div class="zhuzi1 graybg"></div></div>
        <div class="relative"><div class="zhuzi1 redbg"></div></div>
        <div class="relative"><div class="zhuzi1 redbg"></div></div>
        <div class="relative"><div class="zhuzi1 redbg"></div></div>
        <div class="relative"><div class="zhuzi1 redbg"></div></div>
        <div class="relative"><div class="zhuzi1 redbg"></div></div>
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
      <div class="shichangwendu-row3">
        <img src="./assets/img/down.png" />
        <div class="greenbg"></div>
        <div class="graybg"></div>
        <div class="redbg"></div>
        <img src="./assets/img/up.png" />
      </div>
      <div class="shichangwendu-row4">
        <div class="">泸股通资金</div>
        <div class="green">-14.98亿</div>
        <div class="">深股通资金</div>
        <div class="red">18.68亿</div>
      </div>
    </div>

    <div class="bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">板块行业</div>
        <div class="more-txt">更多></div>
      </div>
      <div class="bankuaihangye-content">
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
      </div>
    </div>

    <div class="gainianbankuai bankuaihangye">
      <div class="bankuaihangye-head">
        <div class="title-txt">概念板块</div>
        <div class="more-txt">更多></div>
      </div>
      <div class="bankuaihangye-content">
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
        <div class="bankuaihangye-content-cell">
          <div class="bigtxt">食品加工制造</div>
          <div class="red bignum">+3.70%</div>
          <div class="graytxt">天润乳业</div>
        </div>
      </div>
    </div>

    <div class="zhangtingfenxi">
      <div class="zhangtingfenxi-head">
        <div class="title-txt">涨停分析</div>
        <div class="more-txt">更多></div>
      </div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="昨日涨停(100)">昨日涨停(100)</a-tab-pane>
        <a-tab-pane key="2" tab="今日连板(25)"> </a-tab-pane>
        <a-tab-pane key="3" tab="最高6连板"></a-tab-pane>
      </a-tabs>
      <div class="zhangtingfenxi-row1"></div>
      <div class="zhangtingfenxi-row2">代码名称 涨幅 连板天数 概念</div>
      <div class="zhangtingfenxi-row3">
        <div>
          阿里巴巴 +8.79% 5 食品饮料
        </div>
        <div>
          阿里巴巴 +8.79% 5 食品饮料
        </div>
        <div>
          阿里巴巴 +8.79% 5 食品饮料
        </div>
      </div>
    </div>
    <div class="celuechi">
      <div class="celuechi-row1 title-txt">策略池</div>
      <div class="celuechi-row2">
        <div class="graytxt">短线收割机</div>
        <div class="more-txt">更多></div>
      </div>
      <div class="celuechi-row3">代码名称 涨跌幅 现价 行业</div>
      <div class="celuechi-row4">
        <div class="celuechi-row4-col1">
          <div>当日选出</div>
          <div>在池</div>
          <div>不在池</div>
        </div>
        <div class="celuechi-row4-col2">
          <div>阿里巴巴 +8.79% 5 食品饮料</div>
          <div>阿里巴巴 +8.79% 5 食品饮料</div>
          <div>阿里巴巴 +8.79% 5 食品饮料</div>
          <div>阿里巴巴 +8.79% 5 食品饮料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: mFont;
  src: url("./assets/DIN Medium.ttf");
}
:root {
  --blue-color: #2874e8;
  --red-color: #ea3031;
  --green-color: #67c466;
}
body {
  background: #d4e5ff;
}
#app {
  font-family: FX-LED;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  gap: 20px;
}
.green {
  color: var(--green-color, green);
}
.greenbg {
  background-color: var(--green-color, green);
}
.redbg {
  background-color: var(--red-color, red);
}
.red {
  color: var(--red-color, red);
}
.blue {
  color: var(--blue-color, #2874e8);
}
.graybg {
  background-color: #ababab;
}
.bigtxt {
  font-size: 1.2rem;
}
.bignum {
  font-size: 1.5rem;
  font-weight: bold;
}
.midnum {
  font-size: 0.8rem;
}
.graytxt {
  color: #ababab;
  font-size: 1.1rem;
}
</style>
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
  gap: 10px;
  padding: 10px;
  &-cell {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 5%);
    &-row3 {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
}
.bankuaihangye {
  display: grid;
  grid-template-rows: 30px 1fr;
  &-head {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &-content {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 10px;
    gap: 5px;
    &-cell {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
    }
  }
}
.zhangtingfenxi {
  display: grid;
  grid-template-rows: 30px 30px 30px 1fr;
  ::v-deep {
    .ant-tabs-nav-scroll {
      text-align: center;
    }
  }
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
  font-weight: 600;
  &-col1 {
    img {
      width: 1rem;
    }
  }
  &-col2 {
    justify-self: end;
  }
}
.shichangwendu {
  &-row1 {
    display: grid;
    grid-template-columns: 3fr 3fr 4fr;
    &-col1 {
    }
    &-col2 {
      justify-self: end;
      align-self: end;
      font-size: 1.4rem;
    }
    &-col3 {
      display: grid;
      grid-template-rows: 1fr 1fr;
      justify-self: end;
      align-self: end;
      font-size: 0.8rem;
      padding-right: 0.8rem;
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
    grid-template-columns: 1rem 1fr 5px 1fr 1rem;
    margin: 0 0.8rem;
    img {
      width: 1rem;
      justify-self: center;
      align-self: center;
    }
  }
  &-row4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    margin: 0 1.8rem;
    .red {
      justify-self: end;
    }
  }
}
.celuechi {
  display: grid;
  grid-template-rows: auto 3rem auto 1fr;
  &-row2 {
    padding-left: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
.zhuzi1 {
  width: 50%;
  height: 70%;
  position: absolute;
  bottom: 0;
  transform: translate(50%, 0px);
}
.justify-self-center {
  justify-self: center;
}
.relative {
  position: relative;
}
.title-txt {
  font-size: 18pt;
  font-weight: bold;
  padding-left: 0.8rem;
}

.more-txt {
  color: #9a9a9a;
  justify-self: end;
  font-size: 1rem;
  padding-right: 20px;
}
.renqi {
  background-image: url(./assets/img/renqi.png);
}
.zhangting {
  background-image: url(./assets/img/zhangting.png);
}
.longhu {
  background-image: url(./assets/img/longhu.png);
}
.zhangting {
  background-image: url(./assets/img/renqi.png);
}
.celue {
  background-image: url(./assets/img/celue.png);
}
.youzi {
  background-image: url(./assets/img/youzi.png);
}
.zixuan {
  background-image: url(./assets/img/zixuan.png);
}
</style>
