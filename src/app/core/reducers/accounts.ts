import * as account from '../actions/account';
import { IAccount } from '../models';

export interface State {
	ids: string[];
	entities: { [id: string]: IAccount };
	selectedId: null | string;
}

const initialState: State = {
	ids: [],
	entities: {},
	selectedId: null
};

export function reducer(state = initialState, action: account.Actions): State {
	switch (action.type) {
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
