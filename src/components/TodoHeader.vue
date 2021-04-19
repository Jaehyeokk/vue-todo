<template>
  <div class="todo-header">
    <div class="container">
      <el-tabs v-model="active_tab" @tab-click="handleTab">
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
      active_tab: "day",
    };
  },
  methods: {
    handleTab() {
      this.$emit("emitActiveTab", this.active_tab);
    },
  },
};
</script>

<style scoped></style>
