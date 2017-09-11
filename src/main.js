// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import '@/common/css/ionicons.min.css'
import 'swiper/dist/css/swiper.css'
import '@/common/css/font.css'
import '@/common/css/reset.styl'
Vue.config.productionTip = false


fastclick.attach(document.body)

Vue.use(VueLazyload, {
  //loading: require('common/image/default.png')
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
