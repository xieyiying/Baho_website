import Vue from 'vue'
import Router from 'vue-router'
import pcRouter from './pcRouter'
import ydRouter from './ydRouter'

Vue.use(Router)
let routes = []

if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = ydRouter
} else {
  routes = pcRouter
}

export default new Router({
  // mode: 'history',
  routes
})
