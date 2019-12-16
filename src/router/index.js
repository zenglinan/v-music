import Vue from 'vue'
import VueRouter from 'vue-router'
import Mine from '../components/Mine'
import MVideo from '../components/MVideo'
import NewSongs from '../components/NewSongs'
import Recommand from '../components/Recommand'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/mvideo',
    component: MVideo
  },
  {
    path: '/newsongs',
    component: NewSongs
  },
  {
    path: '/recommand',
    component: Recommand
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
