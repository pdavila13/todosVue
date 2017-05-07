// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import 'material-design-icons/iconfont/material-icons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'
import auth from './services/auth'

import 'fastclick/lib/fastclick'
import 'animate.css/animate.css'

window.axios = Axios
window.querystring = querystring
Vue.prototype.$http = Axios

window.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

if (auth.loggedIn()) {
  window.axios.defaults.headers.common = {
    'Authorization': auth.getAuthHeader()
  }
}

import router from './services/router'

Vue.use(VueMaterial)
Vue.use(VueRouter)

/* vue-material themes */
Vue.material.registerTheme('custon', {
  primary: {
    color: 'red',
    hue: 'A200'
  },
  accent: {
    color: 'blue',
    hue: '300'
  }
})

/* Apply theme */
Vue.material.setCurrentTheme('custon')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
