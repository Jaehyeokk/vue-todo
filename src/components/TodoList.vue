<template>
  <div class="todo-list">
    <div class="container">
      <PerfectScrollbar tag="ul" class="todo-list">
        <li
          v-for="(todo_item, index) in cs_todoItems"
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
      </PerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from "vue2-perfect-scrollbar";
import _ from "lodash";
import { mapGetters, mapState } from "vuex";
import "vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css";
export default {
  components: {
    PerfectScrollbar,
  },
  computed: {
    ...mapGetters(["getTodoItems"]),
    ...mapState(["date", "active_tab"]),
    cs_todoItems() {
      const filteredDateUnit = _.filter(this.getTodoItems, {
        date_unit: this.active_tab,
      });
      const filteredDate = _.filter(filteredDateUnit, { date: this.date });
      return filteredDate;
    },
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

.ps {
  height: 200px;
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
