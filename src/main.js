import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common/scss/index.scss"
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: './common/images/lazy.png',
  loading: require('./common/images/lazy.png'),
  attempt: 1
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')