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

		default: return state;
	}
}
