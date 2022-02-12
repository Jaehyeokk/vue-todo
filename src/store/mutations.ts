import { RootState } from './state';

export interface TodoItem {
	seq: number;
	date_unit: string;
	date: string;
	checked: boolean;
	todo_item: string;
}
export interface PayloadObj {
	todo_item: TodoItem;
	index: number;
}

export interface EditPayload {
	obj: PayloadObj;
	new_obj: TodoItem;
}

export const mutations = {
	selectTab(state: RootState, tab: string): void {
		state.active_tab = tab;
	},
	selectDate(state: RootState, date: string): void {
		state.date = date;
	},
	addTodoItem(state: RootState, input: string): void {
		const seq = localStorage.getItem('todo_item_seq') as string;
		const parsedSeq = JSON.parse(seq);
		state.todo_item_seq = parsedSeq * 1;
		state.todo_item_seq++;
		const obj = {
			seq: state.todo_item_seq,
			date_unit: state.active_tab,
			date: state.date,
			checked: false,
			todo_item: input,
		};
		localStorage.removeItem('todo_item_seq');
		localStorage.setItem('todo_item_seq', state.todo_item_seq.toString());
		localStorage.setItem(state.todo_item_seq.toString(), JSON.stringify(obj));
		state.todo_items.push(obj);
	},

	editTodoItem(state: RootState, payload: EditPayload): void {
		localStorage.removeItem(payload.obj.todo_item.seq.toString());
		state.todo_items.splice(payload.obj.index, 1);

		localStorage.setItem(
			payload.obj.todo_item.seq.toString(),
			JSON.stringify(payload.new_obj),
		);
		state.todo_items.splice(payload.obj.index, 0, payload.new_obj);
	},
	removeTodoItem(state: RootState, payload: PayloadObj): void {
		localStorage.removeItem(payload.todo_item.seq.toString());
		state.todo_items.splice(payload.index, 1);
	},
	removeAllItems(state: RootState): void {
		localStorage.clear();
		state.todo_items = [];
	},
};

export type Mutations = typeof mutations;
