<template>
  <div class="todo-input">
    <div class="container">
      <div class="input">
        <el-input
          placeholder="Please input"
          v-model="todo_input"
          @keyup.enter.native="handleInput"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      todo_input: "",
    };
  },
  computed: {
    ...mapState(["date"]),
  },
  methods: {
    handleInput() {
      if (this.date === "") {
        alert("Please select Date");
      } else {
        if (this.todo_input === "") {
          alert("Input something");
        }
        this.$store.commit("addTodoItem", this.todo_input);
        this.todo_input = "";
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 30px;
}
</style>
