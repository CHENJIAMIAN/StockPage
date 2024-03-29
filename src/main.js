import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@/assets/index.scss'
import router from './router'
import echarts from 'echarts'
import infiniteScroll from "vue-infinite-scroll";
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts

Vue.use(Antd);
Vue.directive('infinite-scroll', infiniteScroll)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
