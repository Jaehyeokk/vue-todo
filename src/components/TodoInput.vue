<template>
  <div class="todo-input">
    <div class="container">
      <div class="input">
        <el-input placeholder="Please input" v-model="input"></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
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
