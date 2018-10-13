// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/less/base.css'
import Utils from './utils/utils'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'babel-polyfill'

Vue.use(VueQuillEditor)

Vue.config.productionTip = false
Vue.prototype.$utils = Utils
Vue.prototype.$axios = axios
Vue.prototype.$Bus = new Vue()

// const Bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
