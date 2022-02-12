import { TodoItem } from './mutations';
import { RootState } from './state';

export const getters = {
	getTodoItems(state: RootState): TodoItem[] {
		return state.todo_items;
	},
};

export type Getters = typeof getters;
