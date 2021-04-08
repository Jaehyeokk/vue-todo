<template>
  <div id="app-todo">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
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
    clearItems() {
      localStorage.clear();
      this.$store.state.todo_items = [];
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
