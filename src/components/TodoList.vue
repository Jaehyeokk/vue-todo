<template>
  <div class="todo-list">
    <div class="container">
      <ul class="todo-list">
        <li class="todo-list-item">
          <span class="check-btn">ㅁ</span>
          <p class="todo-text">투두리스트</p>
          <span class="remove-btn">ㅂ</span>
        </li>
        <li class="todo-list-item">
          <span class="check-btn">ㅁ</span>
          <p class="todo-text">투두리스트</p>
          <span class="remove-btn">ㅂ</span>
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
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
}

.check-btn {
  position: absolute;
  left: 0;
  top: 0;
}
.todo-text {
  padding: 0 20px;
}
.remove-btn {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
