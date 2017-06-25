import { Map } from 'immutable';
import { tassign } from 'tassign';
import { IState, initState } from './state';
import { ISplit } from '../models';
import * as book from '../actions/book';

export type State = IState<ISplit>;

const initialState = initState<ISplit>();

export function reducer(state = initialState, action: book.Actions): State {
	switch (action.type) {
		case book.LOAD_SPLITS: {
			return tassign(state, {
				loading: true
			});
		}
		case book.LOAD_SPLITS_SUCCESS: {
			return tassign(state, {
				loading: false,
				loaded: true,
				entities: Map<string, ISplit>(action.payload.map(c => [c.guid, c]))
			});
		}
		case book.LOAD_SPLITS_FAIL: {
			return tassign(state, {
				loading: false,
				loaded: false
			});
		}
		default: return state;
	}
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getEntities = (state: State) => state.entities;
export const getSelectedId = (state: State) => state.selectedId;
