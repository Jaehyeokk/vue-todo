<template>
  <div class="container">
    <ul class="todo-list">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" class="todo-item">
        <input type="checkbox">
        {{ todoItem }}
        <button v-on:click="removeItem(todoItem, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: [],
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(localStorage.key(i))
        }
      }
    }
  },
  methods: {
    removeItem: function(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    }
  }
}
</script>

<style>

</style>