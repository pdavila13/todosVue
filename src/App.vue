<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Todos</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Todos</h3>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>exit_to_app</md-icon>
          <router-link exact to="login">Login/Logout</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>face</md-icon> <router-link exact to="profile">Profile</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>move_to_inbox</md-icon> <router-link exact to="todos">Todos</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>https</md-icon> <router-link exact to="tokens">Tokens</router-link>

          <md-divider class="md-inset"></md-divider>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>info</md-icon> <router-link exact to="/device">Device Info</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5" alt="People">
          </md-avatar>

          <span>Abbey Christansen</span>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-primary">chat_bubble</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <router-view>
      <!-- Router-view-->
    </router-view>
  </div>
</template>

<script>
import notifications from './services/notifications'

export default {
  name: 'app',
  created () {
    console.log(window.location.href)
    document.addEventListener('devicesready', this.onDeviceReady, false)
  },
  methods: {
    onDeviceReady () {
      console.log('Working on platform: ' + window.device.platform)
      notifications.enable()
    },
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    },
    created () {
      console.log(window.location.href)
    }
  },
  initialize: function () {
    console.log('initialize')
    this.bindEvents()
  },
  bindEvents: function () {
    document.addEventListener('deviceReady', this.onDeviceReady, false)
  },
  onDeviceReady: function () {
    this.logDeviceInfo()
  },
  logDeviceInfo: function () {
    console.log('device')
  }
}
</script>

<style>
a:link {
  color: inherit;
  text-decoration: none;
}
</style>
