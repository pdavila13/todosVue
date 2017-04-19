<template>
    <div class="phone-viewport">
      <md-toolbar>
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Todos</h2>
      </md-toolbar>

      <div class="container"></div>

      <md-sidenav class="md-left" md-swipeable ref="leftSidenav">
        <md-toolbar class="md-account-header">
          <md-list class="md-transparent">
            <md-list-item class="md-list-text-container">
              <md-avatar class="md-large">
                <img :src="avatar" :alt="name">
              </md-avatar>
              <div class="md-list-text-container">
                <span>{{ name }}</span>
                <span>{{ email }}</span>
              </div>
            </md-list-item>
          </md-list>
        </md-toolbar>

        <div class="main-sidebar-links">
          <md-list>
            <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/todos">
                <md-icon>move_to_inbox</md-icon><p>Todos</p>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/profile">
                <md-icon>face</md-icon><p>Profile</p>
              </router-link>
            </md-list-item>

            <md-list-item >
              <router-link @click.native="toggleLeftSidenav" exact to="/notifications">
                <md-icon>notifications</md-icon><p>Notifiactions</p>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/tokens">
                <md-icon>https</md-icon><p>Tokens</p>
              </router-link>

              <md-divider class="md-inset"></md-divider>
            </md-list-item>

            <md-list-item>
              <md-icon>phonelink_setup</md-icon>
              <span>Others Components</span>
              <md-list-expand>
                <md-list>
                  <md-list-item class="md-inset">
                    <router-link @click.native="toggleLeftSidenav" exact to="/device-info">
                      <md-icon>perm_device_information</md-icon><p>Device Info</p>
                    </router-link>
                  </md-list-item>

                  <md-list-item class="md-inset">
                    <router-link @click.native="toggleLeftSidenav" exact to="/vibrate">
                      <md-icon>alarm_on</md-icon><p>Vibrate</p>
                    </router-link>
                  </md-list-item>

                  <md-list-item class="md-inset">
                    <router-link @click.native="toggleLeftSidenav" exact to="/cordova">
                      <md-icon>remove_from_queue</md-icon><p>Cordova</p>
                    </router-link>
                  </md-list-item>
                </md-list>
              </md-list-expand>
            </md-list-item>

            <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/login">
                <md-icon>exit_to_app</md-icon><p>Login/Logout</p>
              </router-link>
            </md-list-item>

            <md-list-item>
              <router-link @click.native="toggleLeftSidenav" exact to="/exit">
                <md-icon>exit_to_app</md-icon><p>Exit App</p>
              </router-link>
            </md-list-item>
          </md-list>
        </div>
      </md-sidenav>
      <transition name="bounce"
                  enter-active-class="animated bounceIn"
                  leave-active-class="animated bounceOut">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
import profileMixin from './Mixins/ProfileMixin'
import notifications from './services/notifications'

export default {
  name: 'app',
  mixins: [profileMixin],
  data () {
    return {
      avatar: '',
      name: null,
      email: null,
      onDeviceReady: false
    }
  },
  created () {
    console.log(window.location.href)
    document.addEventListener('deviceready', this.onDeviceReady, false)
  },
  methods: {
    onDeviceReady () {
      console.log('Working on platform: ' + window.device.platform)
      notifications.enable()
    },
    toggleLeftSidenav () {
      this.$refs['leftSidenav'].toggle()
    }
  }
}
</script>

<style>
a:link {
  color: inherit;
  text-decoration: none;
}
</style>
