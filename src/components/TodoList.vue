<template>
  <div class="container">
    <ul class="todo-list">
      <li
        v-for="(todoItem, index) in propsData"
        :key="todoItem"
        :class="{ completedTodoItem: todoItem.completed }"
        class="todo-item"
      >
        <span class="check-box" v-on:click="toggleTodoItem(index)">Check</span>
        {{ todoItem.item }}
        <button v-on:click="removeItem(todoItem, index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsData"],
  methods: {
    removeItem: function(todoItem, index) {
      this.$emit("removeTodoItem", todoItem, index);
    },
    toggleTodoItem: function(index) {
      this.$emit("checkTodoItem", index);
    },
  },
};
</script>

<style>
.completedTodoItem {
  text-decoration: line-through;
}
</style>
