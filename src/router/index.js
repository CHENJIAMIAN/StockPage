import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
