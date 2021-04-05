<template>
  <div id="app-todo">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addTodo"></TodoInput>
    <TodoList
      v-bind:propsData="todo_items"
      v-on:removeTodoItem="removeTodoItem"
      v-on:checkTodoItem="checkTodoItem"
    ></TodoList>
    <TodoFooter v-on:clearItems="clearItems"></TodoFooter>
  </div>
</template>

<script>
import "./assets/css/reset.css";
import "./assets/css/common.css";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: "app",
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todo_items.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  },
  data() {
    return {
      todo_items: [],
    };
  },
  methods: {
    addTodo(todo_input) {
      const obj = { completed: false, item: todo_input };
      localStorage.setItem(todo_input, JSON.stringify(obj));
      this.todo_items.push(obj);
    },
    removeTodoItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todo_items.splice(index, 1);
    },
    checkTodoItem(index) {
      this.todo_items[index].completed = !this.todo_items[index].completed;
      localStorage.removeItem(this.todo_items[index]);
      localStorage.setItem(
        this.todo_items[index],
        JSON.stringify(this.todo_items[index])
      );
    },
    clearItems() {
      localStorage.clear();
      this.todo_items = [];
    },
  },
};
</script>

<style scoped>
#app-todo {
  max-width: 600px;
  margin: 100px auto 0 auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #eee;
}
</style>
