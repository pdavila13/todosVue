<template>
    <div>
        <div class="md-button" @touchend="countTouch(true)" @click="countClick(true)">Delay</div>
        <md-list>
            <p v-show="delayHasTried">{{ delayTime }}ms.</p>
        </md-list>
        <md-button class="md-raised md-primary" @click.native="onVibration">Vibrate</md-button>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        delayHasTried: null,
        delayTime: null,
        teTime: null,
        cTime: null
      }
    },
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    beforeDestroy () {
      document.removeEventListener('deviceready', this.onBeforeDestroy, false)
    },
    methods: {
      onDeviceReady: function () {
        console.log('Device Ready')
      },
      onVibration: function () {
        if (navigator.vibrate) {
          navigator.vibrate([1000, 1000, 1000, 1000, 1000, 500, 1000, 500])
        } else {
          navigator.notification.alert(
            'Vibration API not supported from device',    // message
            null,                                        // callback
            'Vibration Plugin',                         // title
            'OK'
          )
        }
      },
      onBeforeDestroy () {
        console.log('Device onBeforeDestroy!')
      },
      countTouch: function (hasDelay) {
        this.delayHasTried = true
        this.teTime = Date.now()
        if (!hasDelay) {
          this.delayTime = this.cTime - this.teTime
        }
      },
      countClick: function (hasDelay) {
        this.delayHasTried = true
        this.cTime = Date.now()
        if (hasDelay) {
          this.delayTime = this.cTime - this.teTime
        }
      }
    }
  }
</script>