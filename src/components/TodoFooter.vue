<template>
  <div class="todo-footer-wrap container">
    <button class="clear-all-btn" type="button" v-on:click="clearItems">
      Clear All
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clearItems: function() {
      this.$emit("clearItems");
    },
  },
};
</script>

<style>
.todo-footer-wrap {
  width: 300px;
  margin: 0 auto;
}
.clear-all-btn {
  width: 100%;
}
</style>
