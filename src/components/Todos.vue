<template>
    <div>
        <div>
            <ul>
                <li v-for="(todo, index) in todos">
                    {{ todo.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
export default {
  name: 'todos',
  data () {
    return {
      todos: []
    }
  },
  created () {
    console.log('Component todolist created.')
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      return this.fetchPage(1)
    },
    fetchPage: function (page) {
      this.$http.get('http://localhost:8002/api/v1/task?page=' + page).then((response) => {
        console.log(response)
      }, (response) => {
        console.log(response)
      })
    }
  }
}
</script>
