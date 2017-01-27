<template>
    <div>
        <md-table-card>
            <md-toolbar>
                <h1 class="md-title">Todos</h1>
                <md-button class="md-icon-button">
                    <md-icon>filter_list</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>search</md-icon>
                </md-button>
            </md-toolbar>

            <md-table md-sort="name" md-sort-type="desc">
                <md-table-header>
                    <md-table-row>
                        <md-table-head md-numeric>ID</md-table-head>
                        <md-table-head>Name</md-table-head>
                        <md-table-head md-numeric>Priority</md-table-head>
                        <md-table-head md-numeric>Done</md-table-head>
                    </md-table-row>
                </md-table-header>

                <md-spinner :md-size="150" md-indeterminate  class="md-accent" v-show="connecting" ></md-spinner>

                <md-table-body>
                    <md-table-row v-for="(todo, index) in todos" md-auto-select md-selection>
                        <md-table-cell>{{ index +1 }}</md-table-cell>
                        <md-table-cell>{{ todo.name }}</md-table-cell>
                        <md-table-cell>{{ todo.priority }}</md-table-cell>
                        <md-table-cell>
                            <md-switch v-model="todo.done" id="done" name="done"></md-switch>
                        </md-table-cell>
                    </md-table-row>
                </md-table-body>
            </md-table>

            <md-table-pagination
                    :md-size=perPage
                    :md-total=total
                    :md-page=page
                    md-label="Rows"
                    md-separator="of"
                    :md-page-options="[5, 15, 25, 50]"
                    @pagination="onPagination">
            </md-table-pagination>
        </md-table-card>

        <md-snackbar md-position="bottom center" ref="connectionError" md-duration="4000">
            <span>Connection error. Please reconnect using connect button!.</span>
        </md-snackbar>
    </div>
</template>
<style>
</style>
<script>
var STORAGE_KEY = 'todosvue_token'
var API_URL = 'http://oauthserver.dev:8002/api/v1/task'

export default{
  data () {
    return {
      todos: [],
      authorized: false,
      connecting: true,
      total: 0,
      perPage: 0,
      page: 0
    }
  },
  created () {
    var that = this
    setTimeout(function () {
      that.fetchData()
      that.connecting = false
    }, 500)
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem(STORAGE_KEY)
      // TODO: https://laracasts.com/discuss/channels/laravel/laravel-53-passport-cross-domain-error
      // https://medium.com/@mshanak/solved-laravel-5-3-passport-with-cors-2c6667ef058b#.dbc3c9mcq

      this.$http.get(API_URL + '?page=' + page).then((response) => {
        this.todos = response.data.data
        console.log(response.data)
        console.log(typeof response.data.total)
        this.total = response.data.total
        this.perPage = response.data.per_page
        this.page = response.data.current_page
      }, (response) => {
        console.log('ERROR DATA: ' + response.data)
        this.showConnectionError()
        this.authorized = false
      })
    },
    showConnectionError () {
      this.$refs.connectionError.open()
    },
    onPagination: function () {
      console.log('pagination todo!')
    }
  }
}
</script>