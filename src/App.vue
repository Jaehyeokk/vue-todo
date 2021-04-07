<template>
  <div id="app-todo">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList
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
  data() {
    return {
      todo_items: [],
    };
  },
  methods: {
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
