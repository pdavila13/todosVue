<template>
    <vue-pull-refresh :on-refresh="onRefresh" :config="PulltoRefreshConfig">
        <div>
            <div align="center">
                <md-spinner :md-size="300" md-indeterminate v-show="connecting"></md-spinner>
            </div>
            <md-card md-with-hover>
                <md-card-content>
                    <md-input-container>
                        <md-icon>person</md-icon>
                        <label>Name</label>
                        <md-input v-model="name" placeholder="Name" disabled></md-input>
                    </md-input-container>

                    <md-input-container>
                        <md-icon>mail</md-icon>
                        <label>Email</label>
                        <md-input v-model="email" placeholder="Email" disabled></md-input>
                    </md-input-container>

                    <md-input-container>
                        <md-icon>lock</md-icon>
                        <label>Your Token</label>
                        <md-textarea v-model="token" placeholder="Token" disabled></md-textarea>
                    </md-input-container>

                    <md-button class="md-raised md-primary"><router-link exact to="/profile" class="md-button">Return to Profile</router-link></md-button>


                </md-card-content>
                <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
                    <span>Connection error. Please reconnect using connect button!.</span>
                </md-snackbar>
            </md-card>
        </div>
    </vue-pull-refresh>
</template>
<style>
    .md-input-container textarea {
        min-height: 300px;
    }
</style>
<script>
import profileMixin from '../Mixins/ProfileMixin'
import auth from '../services/auth'

export default {
  mixins: [profileMixin],
  data () {
    return {
      name: null,
      email: null,
      connecting: true,
      token: auth.getToken()
    }
  }
}
</script>
