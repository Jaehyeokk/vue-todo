import { TodoItem } from './mutations';

const fetchItems = () => {
	const todo_items = [];
	if (localStorage.length > 0) {
		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
				const storageKey = localStorage.key(i) as string;
				const storageItem = localStorage.getItem(storageKey) as string;
				if (storageKey !== null) {
					todo_items.push(JSON.parse(storageItem));
				}
			}
		}
	}
	return todo_items;
};

export const state = {
	active_tab: '' as string,
	date: '' as string,
	todo_items: fetchItems() as TodoItem[],
	todo_item_seq: 0 as number,
};

export type RootState = typeof state;
