import Vue from 'vue'
import VueRouter from 'vue-router'
// home不可按需引入,否则放在其中的全局样式会失效
import home from '../views/home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('@/views/solution.vue')
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('@/views/check.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue')
  },
  {
    path: '/wkhmd',
    name: 'wkhmd',
    component: () => import('@/views/well-known-hot-money-detail.vue')
  },
  {
    path: '/wkhm',
    name: 'wkhm',
    component: () => import('@/views/well-known-hot-money.vue')
  },
  {
    path: '/bbgs_celuechi',
    name: 'bbgs_celuechi',
    component: () => import('@/views/bbgs-celuechi.vue')
  },
  {
    path: '/market_popularity',
    name: 'market_popularity',
    component: () => import('@/views/market-popularity.vue')
  },
  {
    path: '/daily_limit_analysis',
    name: 'daily_limit_analysis',
    component: () => import('@/views/daily-limit-analysis.vue')
  },
  {
    path: '/daily_limit_analysis_detail',
    name: 'daily_limit_analysis_detail',
    component: () => import('@/views/daily-limit-analysis-detail.vue')
  },
  {
    path: '/my_watchlist',
    name: 'my_watchlist',
    component: () => import('@/views/my-watchlist.vue')
  },
  {
    path: '/longhu',
    name: 'longhu',
    component: () => import('@/views/longhu.vue')
  },
  {
    path: '/longhu_detail',
    name: 'longhu_detail',
    component: () => import('@/views/longhu-detail.vue')
  },
  {
    path: '/diagnose_report',
    name: 'diagnose_report',
    component: () => import(/* webpackChunkName: "diagnose_report" */ '@/views/diagnose-report.vue')
  }


]

const router = new VueRouter({
  routes
})

export default router
