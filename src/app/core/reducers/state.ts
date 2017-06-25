import { Map } from 'immutable';

export interface IState<TEntity> {
	loading: boolean;
	loaded: boolean;
	entities: Map<string, TEntity>,
	selectedId: string | null;
}

export function initState<TEntity>(): IState<TEntity> {
	return {
		loading: false,
		loaded: false,
		entities: Map<string, TEntity>(),
		selectedId: null
	}
}

