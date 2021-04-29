<template>
  <div class="todo-app">
    <TodoHeader></TodoHeader>
    <TodoDate></TodoDate>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// CSS
import "./assets/css/reset.css";
import "./assets/css/common.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/element-ui.css";
// Components
import TodoHeader from "./components/TodoHeader";
import TodoDate from "./components/TodoDate";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "app",
  components: {
    TodoHeader,
    TodoDate,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    removeTodo(payload) {
      localStorage.removeItem(payload.obj.todo_item);
      this.todo_items.splice(payload.index, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todo_items = [];
    },
  },
};
</script>

<style scoped>
.todo-app {
  width: 360px;
  border-radius: 5px;
  background-color: #3b424a;
}
</style>
