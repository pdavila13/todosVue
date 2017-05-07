<template>
    <vue-pull-refresh :on-refresh="onRefresh" :config="PulltoRefreshConfig">
        <div>
            <div align="center">
                <md-spinner :md-size="300" md-indeterminate v-show="connecting"></md-spinner>
            </div>
            <md-card md-with-hover>
                <md-card-header>
                    <md-avatar>
                        <img :src="avatar" :alt="name">
                    </md-avatar>

                    <div class="md-title">{{ id }} - {{ name }}</div>
                    <div class="md-subhead">{{ email }}</div>
                </md-card-header>

                <md-card-content>
                    <form novalidate @submit.stop.prevent="submit">
                        <md-input-container>
                            <md-icon>person</md-icon>
                            <label>Name</label>
                            <md-input v-model="name" placeholder="Put your name here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>email</md-icon>
                            <label>Email</label>
                            <md-input v-model="email" placeholder="Put your email here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>date_range</md-icon>
                            <label>Created at</label>
                            <md-input v-model="createdAt" placeholder="Date here"></md-input>
                        </md-input-container>

                        <md-input-container>
                            <md-icon>date_range</md-icon>
                            <label>Updated at</label>
                            <md-input v-model="updatedAt" placeholder="Date here"></md-input>
                        </md-input-container>
                    </form>
                    <md-button class="md-raised md-primary">
                        <router-link exact to="/tokens" class="md-button">Show Token</router-link>
                    </md-button>
                </md-card-content>
                <md-card-content>
                    <md-input-container>
                        <md-icon>location_on</md-icon>
                        <label>Position Latitude</label>
                        <md-input v-model="latitude" placeholder="Latitude here"></md-input>
                    </md-input-container>

                    <md-input-container>
                        <md-icon>location_on</md-icon>
                        <label>Position Longitude</label>
                        <md-input v-model="longitude" placeholder="Longitude here"></md-input>
                    </md-input-container>
                </md-card-content>

                <md-card-actions>
                    <md-button @click.native="onSaveUserPhone">
                        <md-icon>contacts</md-icon>
                        <span class="md-subheading">Contact</span>
                    </md-button>
                    <md-button @click.native="onSaveLocation">
                        <md-icon>add_location</md-icon>
                        <span class="md-subheading">Location</span>
                    </md-button>
                    <md-button @click.native="onChangeAvatar">
                        <md-icon>person_pin</md-icon>
                        <span class="md-subheading">Change Avatar</span>
                    </md-button>
                    <!--<md-button>Edit</md-button>-->
                    <!--<md-button>Delete</md-button>-->
                </md-card-actions>
                <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
                    <span>Connection error. Please reconnect using connect button!.</span>
                </md-snackbar>
                <md-snackbar md-position="bottom center" ref="contactsError" md-duration="4000">
                    <span>Contacts API not supported!</span>
                </md-snackbar>
                <md-snackbar md-position="bottom center" ref="geolocationError" md-duration="4000">
                    <span>Geolocation API not supported!</span>
                </md-snackbar>
                <md-snackbar md-position="bottom center" ref="cameraError" md-duration="4000">
                    <span>Camera API not supported!</span>
                </md-snackbar>
                <md-snackbar md-position="bottom center" ref="ChangeAvatar" md-duration="4000">
                    <span>Your avatar was changed successfully!</span>
                </md-snackbar>
            </md-card>
        </div>
    </vue-pull-refresh>
</template>
<style>
</style>
<script>
  import auth from '../services/auth'
  import profileMixin from '../Mixins/ProfileMixin'
  export default{
    mixins: [profileMixin],
    data () {
      return {
        avatar: '',
        id: null,
        name: null,
        email: null,
        createdAt: null,
        updatedAt: null,
        connecting: true,
        latitude: '',
        longitude: ''
      }
    },
    created () {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    beforeDestroy () {
      document.removeEventListener('deviceready', this.onBeforeDestroy, false)
    },
    mounted () {
      this.latitude = auth.getLatitude()
      this.longitude = auth.getLongitude()
    },
    methods: {
      onDeviceReady: function () {
        console.log('Device Ready')
      },
      onSaveUserPhone: function () {
        if (!navigator.contacts) {
          this.$refs.contactsError.open()
        }
        navigator.notification.confirm(
          'Do You Want Save',
          this.onConfirmSaveUser,
          'Save User Phone',
          'OK,Cancel'
        )
      },
      onConfirmSaveUser (button) {
        if (button === 1) {
          var contact = navigator.contacts.create()
          contact.name = this.name
          contact.displayName = this.name
          contact.emails = this.email
          var phoneNumbers = []
          phoneNumbers[0] = new window.ContactField('mobile', this.phone, true)
          contact.phoneNumbers = phoneNumbers
          contact.save()
        }
      },
      onSaveLocation: function () {
        if (!navigator.geolocation) {
          this.$refs.geolocationError.open()
        }
        navigator.notification.confirm(
          'Do You Want Save',
          this.onConfirmSaveLocation,
          'Save Geolocation',
          'OK,Cancel'
        )
      },
      onConfirmSaveLocation (button) {
        if (button === 1) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              auth.saveLatitude(position.coords.latitude)
              auth.saveLongitude(position.coords.longitude)
              this.latitude = auth.getLatitude()
              this.longitude = auth.getLongitude()
            })
        }
      },
      onChangeAvatar: function () {
        if (!navigator.camera) {
          this.$refs.cameraError.open()
        }
        var options = {
          quality: 50,
          destinationType: window.Camera.DestinationType.DATA_URL,
          sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Album
          encodingType: 0     // 0=JPG 1=PNG
        }
        var avatar = this
        navigator.camera.getPicture(
          function (imgData) {
            avatar.avatar = 'data:image/jpeg;base64,' + imgData
            avatar.openDialog('ChangeAvatar')
          },
          function () {
            navigator.notification.alert(
              'Error Change Avatar',    // message
              null,                     // callback
              'Avatar',                 // title
              'OK'
            )
          }, options)
        return false
      },
      onBeforeDestroy () {
        console.log('Device onBeforeDestroy!')
      }
    }
  }
</script>