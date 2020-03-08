import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common/scss/index.scss"
import VueLazyload from 'vue-lazyload'
import {getHotSongList, getBanners} from './api/recommand'
import getImg from './api/getImg'

Vue.use(VueLazyload, {
  preLoad: 1.2,
  error: require('./common/images/wyy.png'),
  loading: require('./common/images/wyy.png')
})
Vue.config.productionTip = false

// 通过 getImg.js 发起多张图片请求
Promise.all([
  getBanners(1),
  getHotSongList(15)
])
.then(res => {
  return getImg(getURL(res))
})
.then(_ => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount("#app")
})
.catch(e => {})

function getURL(res) { // 过滤出数据的 url
  return res[1].data.playlists.map(d => d.coverImgUrl).concat(res[0].data.banners[0].pic)
}
