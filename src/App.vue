<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoDate></TodoDate>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
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
  data() {
    return {};
  },
};
</script>

<style></style>
