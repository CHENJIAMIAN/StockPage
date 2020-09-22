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
      <a-icon @click="handleRoute('check')" class="check" type="check-square" />
      <a-icon @click="handleRoute('user')" class="user" type="user" />
      <div class="txt home">首页</div>
      <div class="txt solution">策略</div>
      <div class="txt check">自选</div>
      <div class="txt user">我的</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    handleRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
  },
};
</script>
<style lang="scss">
::v-deep {
  .ant-table-thead > tr > th {
    background: white;
    border-bottom: 0.5px solid #80808014;
  }
  .ant-table-tbody > tr > td {
    border-bottom: 0.5px solid #80808014;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    text-align: center;
  }
  .ant-table-thead > tr > th {
    color: #ababab;
    font-size: 1.1rem;
  }
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
