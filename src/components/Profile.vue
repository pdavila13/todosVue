<template>
    <md-card md-with-hover>
        <md-card-header>
            <md-avatar>
                <img :src="avatar" alt="People">
            </md-avatar>

            <div class="md-title">{{ name }}</div>
            <div class="md-subhead">SysAdmin</div>
        </md-card-header>

        <md-card-content>
            <form novalidate @submit.stop.prevent="submit">
                <md-input-container md-inline>
                    <label>Name</label>
                    <md-input v-model="name" placeholder="Name"></md-input>
                </md-input-container>

                <md-input-container md-inline>
                    <label>Email</label>
                    <md-input v-model="email" placeholder="Email"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Create at</label>
                    <md-input v-model="create_at" placeholder="Create_at"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Update at</label>
                    <md-input v-model="Update_at" placeholder="Update_at"></md-input>
                </md-input-container>
            </form>
        </md-card-content>

        <md-card-actions>
            <md-button>Edit</md-button>
            <md-button>Delete</md-button>
        </md-card-actions>
    </md-card>
</template>
<style>
</style>
<script>
import gravatar from 'gravatar'

var STORAGE_KEY = 'todosvue_token'
var API_PROFILE_URL = 'http://oauthserver.dev:8002/api/v1/user'

export default {
  data () {
    return {
      avatar: 'https://s.gravatar.com/avatar/98c50dbb77309f0a27218fb97e6d6a01?s=80',
      id: null,
      name: null,
      email: null,
      createAt: null,
      updateAt: null,
      connecting: true
    }
  },
  create () {
    console.log('Component profile created')
    this.fetchUserProfile()
  },
  methods: {
    avatarUrl: function () {
      return gravatar.url(this.email)
    },
    fetchUserProfile: function () {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem(STORAGE_KEY)
      this.$http.get(API_PROFILE_URL).then((response) => {
        this.connecting = false
        console.log(response.data)
        this.id = response.data.id
        this.name = response.data.name
        this.email = response.data.email
        this.createAt = response.data.create_at
        this.updateAt = response.data.update_at
        this.avatar = this.avatarUrl()
      }, (response) => {
        this.connecting = false
        this.showConnectionError()
      })
    },
    showConnectionError () {
      this.$refs.connectionError.open()
    }
  }
}
</script>