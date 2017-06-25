import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { tassign } from 'tassign';
import { ITransaction } from '../models/transaction';
import { IState, initState } from './state';
import * as account from '../actions/account';

export type State = IState<ITransaction>;

const initialState = initState<ITransaction>();

export function reducer(state = initialState, action: account.Actions): State {
	switch (action.type) {
		case account.LOAD_TRANSACTIONS: {
			return tassign(state, {
				loading: true,
				loaded: false
			})
		}

		case account.LOAD_TRANSACTIONS_SUCCESS: {
			return {
				loading: false,
				loaded: true,
				entities: Map<string, ITransaction>(action.payload.map(t => [t.guid, t])),
				selectedId: null
			}
		}

		case account.LOAD_TRANSACTIONS_FAIL: {
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
