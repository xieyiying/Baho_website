// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/base.css'
import Utils from './utils/utils'
import axios from 'axios'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'babel-polyfill'
import Register from '@/components/register'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Swipe,
  SwipeItem
} from 'vant'

Vue.use(Swipe).use(SwipeItem)
Vue.use(ElementUI, { size: 'small' })
Vue.use(Register)

Vue.config.productionTip = false
Vue.prototype.$utils = Utils
Vue.prototype.$axios = axios
Vue.prototype.$Bus = new Vue()
Vue.prototype.$mBus = new Vue()

// const Bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
