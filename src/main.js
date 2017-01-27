// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'

window.axios = Axios
window.querystring = querystring
Vue.prototype.$http = Axios

import routes from './routes.js'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.auth) {
    console.log('beforeEach')
    console.log(to)
    console.log(from)
    var logged = false
    if (logged) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
