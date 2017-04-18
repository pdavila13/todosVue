<template>
    <md-card md-with-hover>
        <md-card-header>
            <md-avatar>
                <img :src="avatar" alt="People">
            </md-avatar>

            <div class="md-title">{{ id }}{{ name }}</div>
            <div class="md-subhead">{{ email }}</div>
        </md-card-header>

        <md-card-content>

            <md-spinner :md-size="20" md-indeterminate  class="md-accent" v-show="connecting"></md-spinner>

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
                    <md-input v-model="createAt" placeholder="Create_at"></md-input>
                </md-input-container>

                <md-input-container>
                    <label>Update at</label>
                    <md-input v-model="updateAt" placeholder="Update_at"></md-input>
                </md-input-container>
            </form>
        </md-card-content>

        <md-card-actions>
            <md-button>Edit</md-button>
            <md-button>Delete</md-button>
        </md-card-actions>

        <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
            <span>Connection error. Please reconnect using connect button!.</span>
        </md-snackbar>
    </md-card>
</template>
<style>
</style>
<script>
import todosVue from '../todosVue'
import gravatar from 'gravatar'

export default {
  data () {
    return {
      avatar: '',
      id: null,
      name: null,
      email: null,
      createAt: null,
      updateAt: null,
      connecting: true
    }
  },
  create () {
    this.fetchUserProfile()
  },
  methods: {
    avatarUrl: function () {
      return gravatar.url(this.email)
    },
    fetchUserProfile: function () {
      this.$http.get(todosVue.API_PROFILE_URL).then((response) => {
        this.connecting = false
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