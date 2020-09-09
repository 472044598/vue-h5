import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/Tabbar/Index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Sort',
    name: 'Sort',
    component: () => import('@/views/Tabbar/Sort.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/ShopCar',
    name: 'ShopCar',
    component: () => import('@/views/Tabbar/ShopCar.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('@/views/Tabbar/Main.vue'),
    meta: {
      title: '我的'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
