<template>
    <div>
        <!--<div v-show="!authorized">-->
            <!--<md-button class="md-raised md-primary" @click="connect">CONNECT</md-button>-->
        <!--</div>-->

        <div v-show="authorized">
            <md-button class="md-raised md-primary" @click="logout">LOGOUT</md-button>
        </div>

        <md-list v-show="!authorized" class="md-double-line">
            <md-subheader class="md-inset">Tasks</md-subheader>

            <md-list-item v-for="(todo, index) in todos">
                <md-icon>check_box_outline_blank</md-icon>

                <div class="md-list-text-container">
                    <span>{{ todo.name }}</span>
                </div>

                <md-switch v-model="done" id="done" name="done"></md-switch>
            </md-list-item>
        </md-list>

        <!--<md-table-card v-once v-show="!authorized">-->
            <!--<md-toolbar>-->
                <!--<h1 class="md-title">Tasks</h1>-->
                <!--<md-button class="md-icon-button">-->
                    <!--<md-icon>filter_list</md-icon>-->
                <!--</md-button>-->

                <!--<md-button class="md-icon-button">-->
                    <!--<md-icon>search</md-icon>-->
                <!--</md-button>-->
            <!--</md-toolbar>-->

            <!--<md-table md-sort-type="desc" @select="onSelect" @sort="onSort">-->
                <!--<md-table-header>-->
                    <!--<md-table-row>-->
                        <!--<md-table-head>#</md-table-head>-->
                        <!--<md-table-head>Name</md-table-head>-->
                        <!--<md-table-head>Done</md-table-head>-->
                        <!--<md-table-head>Priority</md-table-head>-->
                    <!--</md-table-row>-->
                <!--</md-table-header>-->

                <!--<md-table-body>-->
                    <!--<md-table-row>-->
                        <!--<md-table-cell>{{ index + from }}</md-table-cell>-->
                        <!--<md-table-cell>{{ todo.name }}</md-table-cell>-->
                        <!--<md-table-cell>{{ todo.done }}</md-table-cell>-->
                        <!--<md-table-cell>{{ todo.priority }}</md-table-cell>-->
                    <!--</md-table-row>-->
                <!--</md-table-body>-->
            <!--</md-table>-->

            <!--<md-table-pagination-->
                    <!--md-size="5"-->
                    <!--md-total="10"-->
                    <!--md-page="1"-->
                    <!--md-label="Rows"-->
                    <!--md-separator="of"-->
                    <!--:md-page-options="[5, 10, 25, 50]"-->
                    <!--@pagination="onPagination">-->
            <!--</md-table-pagination>-->
        <!--</md-table-card>-->
    </div>
</template>
<style>

</style>
<script>
var STORAGE_KEY = 'todosvue_token'
var AUTH_CLIENT_ID = 2
var AUTH_REDIRECT_URI = 'http://localhost:8080/todos'

export default {
  data () {
    return {
      todos: [],
      authorized: false,
      from: 0
    }
  },
  created () {
    var token = this.extractToken(document.location.hash)
    if (token) this.saveToken(token)
    if (this.fetchToken()) {
      this.authorized = true
    } else {
      this.authorized = false
    }
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.get('http://oauthserver.dev:8002/api/v1/task?page=' + page).then((response) => {
        console.log(response.data)
        this.todos = response.data.data
        this.from = response.data.from
      }, (response) => {
        console.log(response.data)
      })
    },
    extractToken: function (hash) {
      var match = hash.match(/access_token=(\w+)/)
      return !!match && match[1]
    },
    logout: function () {
      window.localStorage.removeItem(STORAGE_KEY)
      this.authorized = false
    },
    connect: function () {
      query = {
        client_id: AUTH_CLIENT_ID,
        redirect_uri: AUTH_REDIRECT_URI,
        response_type: 'token',
        scope: ''
      }
      var query = window.querystring.stringify(query)
      window.location.replace('http://oauthserver.dev:8002/oauth/authorize?' + query)
    },
    fetchToken: function () {
      return window.localStorage.getItem(STORAGE_KEY)
    },
    saveToken: function (token) {
      window.localStorage.setItem(STORAGE_KEY, token)
    }
  }
}
</script>
