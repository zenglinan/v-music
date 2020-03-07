import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common/scss/index.scss"
import VueLazyload from 'vue-lazyload'
import {getHotSongList, getBanners} from './api/recommand'

Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: './common/images/wyy.png',
  loading: require('./common/images/wyy.png'),
  attempt: 1
})
Vue.config.productionTip = false

Promise.all([
  getBanners(1),
  getHotSongList(15)
]).then(_ => {
  let vm = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app")
})
