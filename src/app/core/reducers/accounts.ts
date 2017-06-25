import * as account from '../actions/account';
import * as book from '../actions/book';
import { IAccount } from '../models';
import { tassign } from 'tassign';
import { Map } from 'immutable';

export interface State {
	loading: boolean;
	loaded: boolean;
	entities: Map<string, IAccount>;
	selectedId: null | string;
}

const initialState: State = {
	loading: false,
	loaded: false,
	entities: Map<string, IAccount>(),
	selectedId: null
};

export function reducer(state = initialState, action: account.Actions | book.Actions): State {
	switch (action.type) {
		case account.SELECT_ACCOUNT: {
			return tassign(state, <State>{
				selectedId: action.payload
			});
		}
		case book.LOAD_ACCOUNTS: {
			return tassign(state, {
				loading: true,
				loaded: false
			})
		}
		case book.LOAD_ACCOUNTS_SUCCESS: {
			const accounts = action.payload;
			return tassign(state, {
				loading: false,
				loaded: true,
				entities: Map<string, IAccount>(action.payload.map(a => [a.guid, a]))
			});
		}
		// case account.LOAD: {
		// 	return Object.assign({}, state, {
		// 		loading: true
		// 	})
		// }

		// case account.LOAD_SUCCESS: {
		// 	const txns = action.payload;

		// 	return {
		// 		loaded: true,
		// 		loading: false,
		// 		transactionIds: txns.map(tx => tx.guid),
		// 		ids[],
		// 	};
		// }

		// case account.ADD_TRANSACTION_SUCCESS:
		// case account.REMOVE_TRANSACTION_FAIL: {
		// 	const txn = action.payload;
		// 	if (state.transactionIds.indexOf(txn.guid) > -1) {
		// 		return state;
		// 	}

		// 	return Object.assign({}, state, {
		// 		ids: [...state.transactionIds, txn.guid]
		// 	});
		// }

		// case account.REMOVE_TRANSACTION_SUCCESS:
		// case account.ADD_TRANSACTION_FAIL: {
		// 	const txn = action.payload;

		// 	return Object.assign({}, state, {
		// 		ids: state.transactionIds.filter(id => id !== txn.guid)
		// 	});
		// }

		default: return state;
	}
}


// export const getLoaded = (state: State) => state.loaded;

// export const getLoading = (state: State) => state.loading;

// export const getIds = (state: State) => state.transactionIds;

// export const getEntities = (state: State) => state.entities;

// export const getSelectedId = (state: State) => state.selectedBookId;

// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
// 	return entities[selectedId];
// });

// export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
// 	return ids.map(id => entities[id]);
// });

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getAccounts = (state: State) => state.entities;
export const getSelectedId = (state: State) => state.selectedId;
