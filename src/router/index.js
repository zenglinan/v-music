import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mine',
    component: () => import('../components/Mine')
  },
  {
    path: '/mvideo',
    component: () => import('../components/MVideo')
  },
  {
    path: '/singer',
    component: () => import('../components/Singer')
  },
  {
    path: '/recommand',
    component: () => import('../components/Recommand')
  },
  {
    path: "*",
    redirect: '/recommand'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
