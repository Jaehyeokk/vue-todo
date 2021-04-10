export const addTodoItem = (state, payload) => {
  const obj = { completed: false, item: payload };
  localStorage.setItem(payload, JSON.stringify(obj));
  state.todo_items.push(obj);
};
export const removeTodoItem = (state, payload) => {
  state.todo_items.splice(payload.index, 1);
  localStorage.removeItem(payload.todoItem.item);
};
export const checkTodoItem = (state, payload) => {
  state.todo_items[payload.index].completed = !state.todo_items[payload.index]
    .completed;
  localStorage.removeItem(payload.todoItem);
  localStorage.setItem(payload.todoItem, JSON.stringify(payload.todoItem));
};
export const clearItems = (state) => {
  localStorage.clear();
  state.todo_items = [];
};
