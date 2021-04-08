import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todo_items: storage.fetch(),
  },
  mutations: {
    addTodoItem(state, payload) {
      const obj = { completed: false, item: payload };
      localStorage.setItem(payload, JSON.stringify(obj));
      state.todo_items.push(obj);
    },
    removeTodoItem(state, payload) {
      state.todo_items.splice(payload.index, 1);
      localStorage.removeItem(payload.todoItem.item);
    },
    checkTodoItem(state, payload) {
      state.todo_items[payload.index].completed = !state.todo_items[
        payload.index
      ].completed;
      localStorage.removeItem(payload.todoItem);
      localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
    },
  },
});