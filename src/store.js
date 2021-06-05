import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const fetchItems = () => {
  var todo_items = [];
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        todo_items.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }
  return todo_items;
};

export const store = new Vuex.Store({
  state: {
    date_tabs: ["Day", "Week", "Month", "Year"],
    active_tab: "",
    date: "",
    todo_items: fetchItems(),
    todo_item_seq: null,
  },
  getters: {
    getTodoItems(state) {
      return state.todo_items;
    },
  },
  mutations: {
    selectTab(state, tab) {
      state.active_tab = tab;
    },
    selectDate(state, date) {
      state.date = date;
    },
    addTodoItem(state, input) {
      state.todo_item_seq = localStorage.getItem("todo_item_seq");
      state.todo_item_seq++;
      const obj = {
        seq: state.todo_item_seq,
        date_unit: state.active_tab,
        date: state.date,
        checked: false,
        todo_item: input,
      };
      localStorage.removeItem("todo_item_seq");
      localStorage.setItem("todo_item_seq", state.todo_item_seq);
      localStorage.setItem(state.todo_item_seq, JSON.stringify(obj));
      state.todo_items.push(obj);
    },
    removeTodoItem(state, payload) {
      localStorage.removeItem(payload.todo_item.seq);
      state.todo_items.splice(payload.index, 1);
    },
    removeAllItems(state) {
      localStorage.clear();
      state.todo_items = [];
    },
  },
});
