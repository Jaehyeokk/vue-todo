<template>
  <div class="container">
    <transition-group name="list" tag="ul" class="todo-list">
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
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsData"],
  methods: {
    removeItem(todoItem, index) {
      this.$emit("removeTodoItem", todoItem, index);
    },
    toggleTodoItem(index) {
      this.$emit("checkTodoItem", index);
    },
  },
};
</script>

<style>
.completedTodoItem {
  text-decoration: line-through;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
