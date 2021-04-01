<template>
  <div class="container">
    <ul class="todo-list">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem" :class="{completedTodoItem: todoItem.completed}" class="todo-item">
        <span class="check-box" v-on:click="toggleTodoItem(todoItem)">체크</span>
        {{ todoItem.item }}
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
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
  },
  methods: {
    removeItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleTodoItem: function(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  }
}
</script>

<style>
  .completedTodoItem {
    text-decoration: line-through;
  }
</style>