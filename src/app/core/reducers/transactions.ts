import { createSelector } from 'reselect';
import { ITransaction } from '../models/transaction';
import * as account from '../actions/account';

export interface State {
	ids: string[];
	entities: { [id: string]: ITransaction };
	selectedTransactionId: null | string;
}

export const initialState: State = {
	ids: [],
	entities: {},
	selectedTransactionId: null
}

export function reducer(state = initialState, action: account.Actions): State{
	switch(action.type){

		default: return state;
	}
}