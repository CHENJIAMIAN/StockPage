<template>
  <div id="app">
    <div class="body">
      <router-view />
    </div>
    <div class="bottom-nav">
      <a-icon @click="handleRoute('home')" class="home" type="home" />
      <a-icon
        @click="handleRoute('solution')"
        class="solution"
        type="solution"
      />
      <a-icon
        @click="handleRoute('my_watchlist')"
        class="check"
        type="check-square"
      />
      <a-icon class="user" type="user" />
      <div class="txt home">首页</div>
      <div class="txt solution">策略</div>
      <div class="txt check">自选</div>
      <div class="txt user">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
  },
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
  --green-color: #38a251;
}
#home {
  font-family: FX-LED;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-gap: 20px;
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
.gray {
  color: var(--gray-color, gray);
}
.blue {
  color: var(--blue-color, #2874e8);
}
.graybg {
  background-color: #ababab;
}
.bigtxt {
  font-size: 1.2rem;
  color: #343434;
}
.bignum {
  font-size: 1.5rem;
  font-weight: 500;
}
.midnum {
  font-size: 1rem;
  font-weight: 600;
}
.graytxt {
  color: #ababab;
  font-size: 1.1rem;
}
.border-bottom {
  border-bottom: 1px solid #f4f8fb;
}

/* ant-table */
.ant-table-thead > tr > th {
  background: white !important;
  border-bottom: 0.5px solid #80808014 !important;
  color: #ababab !important;
  font-size: 1.1rem !important;
}
.ant-table-tbody > tr > td {
  border-bottom: 0.5px solid #80808014 !important;
}

/* ant-tabs */
/* .ant-tabs-bar.ant-tabs-top-bar > div {
  display: grid;
  grid-auto-flow: column;
}
.ant-tabs-nav > div {
  font-size: 1.2rem;
}*/
.ant-tabs {
  border-top: 0.5px solid #80808014;
}
.ant-tabs-nav-scroll {
  text-align: center;
}
</style>
<style lang="scss" scoped>
#app {
  height: 100%;
  $navHei: 65px;
  .body {
    height: calc(100% - #{$navHei});
    overflow: auto;
  }
  .bottom-nav {
    height: $navHei;
    display: grid;
    grid-template-rows: 1fr 1.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.18);
    .anticon {
      align-self: end;
      font-size: 2.1rem;
    }
  }
}
</style>
