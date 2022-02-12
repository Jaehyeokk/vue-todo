import { ActionContext } from 'vuex';
import { Mutations } from './mutations';
import { RootState } from './state';

type MyActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload?: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export const actions = {};

export type Actions = typeof actions;
