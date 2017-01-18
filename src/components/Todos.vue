<template>
    <div>
        <div v-show="!authorized">
            <md-button class="md-raised md-primary">CONNECT</md-button>
        </div>
        <ul>
            <li v-for="(todo, index) in todos">
                {{ todo.name }}
            </li>
        </ul>
    </div>
</template>
<style>

</style>
<script>
var STORAGE_KEY = 'todosvue_token'

export default {
  data () {
    return {
      todos: [],
      authorized: false
    }
  },
  created () {
    console.log(this.fetchToken())
    if (this.fetchToken) {
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
      this.$http.get('http://localhost:8002/api/v1/task?page=' + page).then((response) => {
        console.log(response.data)
        this.todos = response.data.data
      }, (response) => {
        console.log(response.data)
      })
    },
    connect: function () {
      console.log('do connect here!')
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
