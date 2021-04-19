<template>
  <div class="todo-app">
    <TodoHeader @emitActiveTab="getActiveTab"></TodoHeader>
    <TodoDate :propsActiveTab="this.active_tab" @emitDate="getDate"></TodoDate>
    <TodoInput :propsDate="this.date" @emitTodoInput="getTodoInput"></TodoInput>
    <TodoList :propsTodo="this.todo_items" @removeTodo="removeTodo"></TodoList>
    <TodoFooter @clearAll="clearAll"></TodoFooter>
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
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++)
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todo_items.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
    }
  },
  data() {
    return {
      active_tab: "day",
      date: "",
      todo_items: [],
    };
  },
  methods: {
    getActiveTab(tab) {
      this.active_tab = tab;
    },
    getDate(date) {
      this.date = date;
    },
    getTodoInput(input) {
      const obj = {
        date: this.date,
        checked: false,
        todo_item: input,
      };
      localStorage.setItem(obj.todo_item, JSON.stringify(obj));
      this.todo_items.push(obj);
    },
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
