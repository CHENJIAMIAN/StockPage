<template>
  <div
    id="app"
    :style="{
      'grid-template-rows': isNavRoute ? '1fr' : '66px 1fr',
    }"
  >
    <a-page-header
      v-if="!isNavRoute"
      style="background: #3a84f7; color: #ffffff"
      :title="$router.currentRoute.meta.title || navTitle || '无'"
      @back="back"
    />
    <div class="body">
      <keep-alive>
        <router-view @title="gotTitle"> </router-view>
      </keep-alive>
    </div>
    <div class="bottom-nav" v-if="isNavRoute">
      <img
        v-if="currRouteName !== 'home'"
        src="./assets/img/shouye1.png"
        width="30px"
        @click="handleRoute('home')"
      />
      <img
        v-else
        src="./assets/img/shouye2.png"
        width="30px"
        @click="handleRoute('home')"
      />
      <!-- <a-icon @click="handleRoute('home')" class="home" type="home" /> -->
      <img
        v-if="currRouteName !== 'solution'"
        src="./assets/img/celue1.png"
        width="30px"
        @click="handleRoute('solution')"
      />
      <img
        v-else
        src="./assets/img/celue2.png"
        width="30px"
        @click="handleRoute('solution')"
      />
      <!-- <a-icon
        @click="handleRoute('solution')"
        class="solution"
        type="solution"
      /> -->
<!--      <img-->
<!--        v-if="currRouteName !== 'my_watchlist'"-->
<!--        src="./assets/img/zx1.png"-->
<!--        width="30px"-->
<!--        @click="handleRoute('my_watchlist')"-->
<!--      />-->
<!--      <img-->
<!--        v-else-->
<!--        src="./assets/img/zx2.png"-->
<!--        width="30px"-->
<!--        @click="handleRoute('my_watchlist')"-->
<!--      />-->
      <!-- <a-icon
        @click="handleRoute('my_watchlist')"
        class="my_watchlist"
        type="check-square"
      /> -->
<!--      <img-->
<!--        v-if="currRouteName !== 'user'"-->
<!--        src="./assets/img/user1.png"-->
<!--        width="30px"-->
<!--        @click="handleRoute('user')"-->
<!--      />-->
<!--      <img-->
<!--        v-else-->
<!--        src="./assets/img/user2.png"-->
<!--        width="30px"-->
<!--        @click="handleRoute('user')"-->
<!--      />-->
      <!-- <a-icon class="user" type="user" /> -->
      <div :class="['txt', 'home', currRouteName == 'home' && 'blue']">
        首页
      </div>
      <div :class="['txt', 'solution', currRouteName == 'solution' && 'blue']">
        策略
      </div>
<!--      <div-->
<!--        :class="[-->
<!--          'txt',-->
<!--          'my_watchlist',-->
<!--          currRouteName == 'my_watchlist' && 'blue',-->
<!--        ]"-->
<!--      >-->
<!--        自选-->
<!--      </div>-->
<!--      <div :class="['txt', 'user', currRouteName == 'user' && 'blue']">-->
<!--        我的-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
// const baseUrl = "http://127.0.0.1:8888/admin";
const baseUrl = "http://client.lemengsc.com/admin";

export default {
  baseUrl,
  data() {
    return {
      navTitle: "",
      currRouteName: "",
      navRoutes: ["home", /* "solution", "my_watchlist", */ "user"],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        // 记录滚动位置,在activated时恢复位置
        if (from)
          localStorage[from.name] =
            (document.getElementsByClassName("demo-infinite-container")[0] &&
              document.getElementsByClassName("demo-infinite-container")[0]
                .scrollTop) ||
            document.getElementsByClassName("body")[0].scrollTop;
        this.currRouteName = to.name;
      },
    },
  },
  computed: {
    isNavRoute() {
      return this.navRoutes.includes(this.currRouteName);
    },
  },
  mounted() {},
  methods: {
    gotTitle(title) {
      this.navTitle = title;
    },
    back() {
      window.history.back();
    },
    handleRoute(routeName) {
      this.$router.push(`/${routeName}`);
    },
  },
};
</script>
<style>
body {
  font-family: DIN Medium;
}
@font-face {
  font-family: DIN Medium;
  src: url("./assets/DIN Medium.ttf");
}
:root {
  --blue-color: #2874e8;
  --red-color: #ea3031;
  --green-color: #38a251;
}
#home {
  font-family: DIN Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-gap: 20px;
}
.black {
  color: #333333;
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
  font-size: 1.0rem;
}
.bignum {
  font-size: 1.0rem;
  font-weight: 500;
  font-family: DIN Medium;
}
.midnum {
  font-size: 0.9rem;
  font-weight: 600;
  font-family: DIN Medium;
}
.graytxt {
  color: #ababab;
  font-size: 0.9rem;
}
.border-bottom {
  border-bottom: 1px solid #f4f8fb;
}

/* ant-table */

.ant-table-thead > tr > th,
.ant-table-tbody > tr > td {
  padding: 16px 6px !important;
}
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
.ant-page-header-back-button,
.ant-page-header-heading-title,
.ant-page-header-heading-sub-title {
  color: white !important;
}
</style>
<style lang="scss" scoped>
#app {
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
  $navHei: 65px;
  .body {
    overflow: auto;
  }
  .bottom-nav {
    height: $navHei;
    display: grid;
    grid-template-rows: 1fr 1.5rem;
    //grid-template-columns: 1fr 1fr 1fr 1fr; 去掉四栏
    grid-template-columns: 1fr 1fr ;
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
