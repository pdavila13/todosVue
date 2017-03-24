import todosVue from '../todosVue'
import app from '../App.vue'

export default {
  enable () {
    console.log('Enabling notifications')
    this.initPushNotifications()
    this.registerPushNotifications()
    this.processPushNotifications()
  },
  initPushNotifications () {
    app.push = window.PushNotification.init({
      'android': {
        'senderID': todosVue.ANDROID_SENDER_ID
      },
      'ios': {
        'sound': true,
        'vibration': true,
        'badge': true
      },
      'windows': {}
    })
  },
  registerPushNotifications () {
    app.push.on('registration', function (data) {
      console.log('registration event: ' + data.registrationId)
      var oldRegId = window.localStorage.getItem('registrationId')
      if (oldRegId !== data.registrationId) {
        // Save new registration ID
        window.localStorage.setItem('registrationId', data.registrationId)
        // Post registrationId to your app server as the value has changed
      }
    })
  },
  processPushNotifications () {
    app.push.on('error', function (e) {
      console.log('push error = ' + e.message)
    })
    app.push.on('notification', function (data) {
      console.log('Notification event RECEIVED!!!!!!!!!!!!')
      console.log('Title: ' + data.title)
      console.log('Message: ' + data.message)
      console.log('Foreground: ' + data.additionalData.foreground)
    })
  }
}
