<template>
  <div class="todo-header">
    <div class="container">
      <el-tabs v-model="active_name" @tab-click="handleClick">
        <el-tab-pane label="Day" name="day"></el-tab-pane>
        <el-tab-pane label="Week" name="week"></el-tab-pane>
        <el-tab-pane label="Month" name="month"></el-tab-pane>
        <el-tab-pane label="Year" name="year"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_name: "day",
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style scoped></style>
