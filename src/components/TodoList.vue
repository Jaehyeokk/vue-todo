<template>
  <div class="todo-list">
    <div class="container">
      <ul class="todo-list">
        <li
          v-for="(todo_item, index) in getTodoItems"
          :key="index"
          class="todo-list-item"
        >
          <el-checkbox v-model="todo_item.checked" style="color: #eaf1fb;">{{
            todo_item.todo_item
          }}</el-checkbox>
          <span class="remove-btn" @click="removeTodo({ todo_item, index })"
            ><i class="el-icon-delete"></i
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTodoItems"]),
  },
  methods: {
    removeTodo(obj) {
      this.$store.commit("removeTodoItem", obj);
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  min-height: 200px;
  margin: 0 auto;
}

.todo-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #eaf1fb;
}

.todo-text {
  padding: 0 20px;
}
.remove-btn {
  color: #c0c4cc;
  cursor: pointer;
}
</style>
