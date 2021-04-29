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
    active_tab: "",
    date: "",
    todo_items: fetchItems(),
  },
  mutations: {
    selectTab(state, tab) {
      state.active_tab = tab;
    },
    selectDate(state, date) {
      state.date = date;
    },
    addTodoItem(state, input) {
      const obj = {
        date: state.date,
        checked: false,
        todo_item: input,
      };
      localStorage.setItem(obj.todo_item, JSON.stringify(obj));
      this.todo_items.push(obj);
    },
  },
});
