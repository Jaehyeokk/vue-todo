<template>
  <div class="todo-list">
    <div class="container">
      <ul class="todo-list">
        <li class="todo-list-item">
          <el-checkbox v-model="checked" style="color: #eaf1fb;"
            >투두리스트</el-checkbox
          >
          <span class="remove-btn"><i class="el-icon-delete"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
