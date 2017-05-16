<template>
    <vue-pull-refresh :on-refresh="onRefresh" :config="PulltoRefreshConfig">
        <div align="center">
            <md-spinner :md-size="300" md-indeterminate v-show="connecting"></md-spinner>
        </div>
        <h1>Received Notifications: </h1>
        <div id="notifications" v-for="(notification, index) in notifications">
            <md-card md-with-hover>
                <md-card-header>
                    <div class="md-title"><b>User Name:</b> {{notification.user.name}}</div>
                    <md-card-content><b>Message:</b>
                        <div class="md-subhead">{{notification.message}}</div>
                    </md-card-content>
                    <md-card-content>
                        <b>Created at:</b>
                        <div class="md-subhead">{{notification.created_at}}</div>
                    </md-card-content>
                    <md-card-content>
                        <b>Updated at:</b>
                        <div class="md-subhead">{{notification.updated_at}}</div>
                    </md-card-content>
                </md-card-header>
            </md-card>
            <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
                <span>Connection error. Please reconnect using connect button o Exit and Open App!.</span>
            </md-snackbar>
        </div>
    </vue-pull-refresh>
</template>
<style>
</style>
<script>
import notifications from '../services/notifications'
import todosVue from '../todosVue'
import VuePullRefresh from 'vue-pull-refresh'

export default {
  components: {
    'vue-pull-refresh': VuePullRefresh
  },
  data () {
    return {
      notifications: [],
      created_at: null,
      updated_at: null,
      connecting: true,
      PulltoRefreshConfig: {
        errorLabel: 'Error Try again',
        startLabel: 'Swipe to refresh',
        readyLabel: 'Swipe to refresh',
        loadingLabel: 'Reloading Components'
      }
    }
  },
  created () {
    document.addEventListener('deviceready', this.onDeviceReady, false)
    if (window.cordova && window.device.platform !== 'browser') {
      notifications.enable()
    }
    var that = this
    setTimeout(function () {
      that.fetchPage()
    }, 2500)
  },
  methods: {
    onDeviceReady () {
      console.log('Working on platform' + window.device.platform)
    },
    fetchPage: function () {
      this.$http.get(todosVue.GET_MESSAGES_URL).then((response) => {
        this.connecting = false
        this.notifications = response.data
        this.created_at = response.data.created_at
        this.updated_at = response.data.updated_at
      }, (response) => {
        console.log(response)
        this.connecting = false
        this.$refs.connectionError.open()
      })
    },
    onRefresh: function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, 1000)
      }).then(() => {
        this.fetchPage()
      })
    }
  }
}
</script>