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
export default {
  props: ["propsDate"],
  data() {
    return {
      todo_input: "",
    };
  },
  methods: {
    handleInput() {
      if (this.propsDate === "") {
        alert("Please select Date");
      } else {
        if (this.todo_input === "") {
          alert("Input something");
        }
        this.$emit("emitTodoInput", this.todo_input);
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
