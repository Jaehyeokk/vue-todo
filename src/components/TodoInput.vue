<template>
  <div class="container">
    <div class="todo-input-wrap">
      <input class="todo-input" type="text" v-model="todo_input" v-on:keyup.enter="addTodoItem">
      <button class="todo-input-btn" v-on:click="addTodoItem">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todo_input: '',
    }
  },
  methods: {
    addTodoItem: function() {
      var obj = {completed: false, item: this.todo_input}
      // localStorage.setItem(this.todo_input, obj)
      console.log(localStorage.setItem(this.todo_input, JSON.stringify(obj)));
      this.clearInput()
    },
    clearInput: function() {
      this.todo_input = ''
    }
  }
}
</script>

<style scoped>
  .todo-input-wrap {
    position: relative;
    width: 100%;
  }
  .todo-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 30px;
    padding: 0 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
  }
  .todo-input-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #bbb;
    
  }
</style>