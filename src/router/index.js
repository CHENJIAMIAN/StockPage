import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import solution from '@/views/solution.vue'
import check from '@/views/check.vue'
import user from '@/views/user.vue'
import wkhmd from '@/views/well-known-hot-money-detail.vue'
import wkhm from '@/views/well-known-hot-money.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
    path: '/zhenduanbaogao',
    name: 'zhenduanbaogao',
    component: () => import(/* webpackChunkName: "zhenduanbaogao" */ '../views/zhenduanbaogao.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
