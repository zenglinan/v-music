import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'mine',
    path: '/mine',
    component: () => import('../components/Mine')
  },
  {
    name: 'mvideo',
    path: '/mvideo',
    component: () => import('../components/MVideo')
  },
  {
    name: 'singer',
    path: '/singer',
    component: () => import('../components/Singer'),
    children: [
      {
        path: ':id',
        component: () => import('../components/musicList')
      }
    ]
  },
  {
    name: 'recommand',
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
