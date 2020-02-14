import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'singer',
    path: '/singer',
    component: () => import('../components/Singer'),
    children: [
      {
        path: ':id',
        component: () => import('../components/SingerDetail')
      }
    ]
  },
  {
    name: 'recommand',
    path: '/recommand',
    component: () => import('../components/Recommand'),
    children: [
      {
        path: ':id',
        component: () => import('../components/SonglistDetail')
      }
    ]
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('../components/Search')
  },
  {
    path: "*",
    redirect: '/recommand'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
