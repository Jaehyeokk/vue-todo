<template>
  <div class="container">
    <transition-group name="list" tag="ul" class="todo-list">
      <li
        v-for="(todoItem, index) in todoItems"
        :key="index"
        :class="{ completedTodoItem: todoItem.completed }"
        class="todo-item"
      >
        <span class="check-box" v-on:click="checkTodoItem({ todoItem, index })"
          >Check</span
        >
        {{ todoItem.item }}
        <button v-on:click="removeItem({ todoItem, index })">remove</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      todoItems: "todoItems",
    }),
  },
  methods: {
    ...mapMutations({
      removeItem: "removeTodoItem",
      checkTodoItem: "checkTodoItem",
    }),
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
