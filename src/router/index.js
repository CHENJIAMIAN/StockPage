import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import solution from '@/views/solution.vue'
import check from '@/views/check.vue'
import user from '@/views/user.vue'
import wkhmd from '@/views/well-known-hot-money-detail.vue'
import wkhm from '@/views/well-known-hot-money.vue'
import bbgs_celuechi from '@/views/bbgs-celuechi.vue'
import market_popularity from '@/views/market-popularity.vue'
import daily_limit_analysis from '@/views/daily-limit-analysis.vue'
import daily_limit_analysis_detail from "@/views/daily-limit-analysis-detail.vue"

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
    component: solution
  },
  {
    path: '/check',
    name: 'check',
    component: check
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/wkhmd',
    name: 'wkhmd',
    component: wkhmd
  },
  {
    path: '/wkhm',
    name: 'wkhm',
    component: wkhm
  },
  {
    path: '/bbgs_celuechi',
    name: 'bbgs_celuechi',
    component: bbgs_celuechi
  },
  {
    path: '/market_popularity',
    name: 'market_popularity',
    component: market_popularity
  },
  {
    path: '/daily_limit_analysis',
    name: 'daily_limit_analysis',
    component: daily_limit_analysis
  },
  {
    path: '/daily_limit_analysis_detail',
    name: 'daily_limit_analysis_detail',
    component: daily_limit_analysis_detail
  },
  {
    path: '/diagnose_report',
    name: 'diagnose_report',
    component: () => import(/* webpackChunkName: "diagnose_report" */ '../views/diagnose-report.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
