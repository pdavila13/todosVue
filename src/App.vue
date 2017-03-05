<template>
  <div class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Todos</h2>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://s.gravatar.com/avatar/98c50dbb77309f0a27218fb97e6d6a01?s=80" alt="people">
            </md-avatar>

            <span style="flex: 1"></span>
          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>Paolo Dávila</span>
              <span>pdavila@iesebre.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click="toggleLeftSidenav">
          <md-icon>face</md-icon> <router-link exact to="/profile">Profile</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>move_to_inbox</md-icon> <router-link exact to="/todos">Todos</router-link>
        </md-list-item>

        <md-list-item @click="toggleLeftSidenav">
          <md-icon>https</md-icon> <router-link exact to="/tokens">Tokens</router-link>

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
export default {
  name: 'app',
  data () {
    return {
      device: window.cord
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
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
a {
  color: inherit;
  text-decoration: none;
}
</style>
