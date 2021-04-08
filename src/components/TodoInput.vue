<template>
  <div class="container">
    <div class="todo-input-wrap">
      <input
        class="todo-input"
        type="text"
        v-model="todo_input"
        v-on:keyup.enter="addTodoItem"
      />
      <button class="todo-input-btn" v-on:click="addTodoItem">
        Add
      </button>
    </div>
    <modal v-if="show_modal" @close="show_modal = false">
      <h4 slot="body">Type something</h4>
    </modal>
  </div>
</template>

<script>
import Modal from "./common/Modal";
export default {
  components: {
    Modal: Modal,
  },
  data() {
    return {
      todo_input: "",
      show_modal: false,
    };
  },
  methods: {
    addTodoItem() {
      if (this.todo_input !== "") {
        this.$store.commit("addTodoItem", this.todo_input);
        this.todo_input = "";
      } else {
        this.show_modal = true;
      }
    },
  },
};
</script>

<style scoped>
.todo-input-wrap {
  position: relative;
  width: 100%;
}
.todo-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 30px;
  padding: 0 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
}
.todo-input-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background-color: #bbb;
}
</style>
