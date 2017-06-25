import { IBook } from 'app/core/models';
import * as book from '../actions/book';

export interface State {
	loading: boolean;
	loaded: boolean;
	book: IBook | null;
	// accountIds: string[];
};

const initialState: State = {
	loading: false,
	loaded: false,
	book: null// ,
	// accountIds: []
};

export function reducer(state = initialState, action: book.Actions): State {
	switch (action.type) {
		case book.LOAD: {
			return Object.assign({}, state, {
				loading: true
			});
		}

		case book.LOAD_SUCCESS: {
			return Object.assign({}, state, {
				loaded: true,
				loading: false,
				book: action.payload
			});
		}

		// case book.LOAD_ACCOUNTS_SUCCESS: {
		// 	return Object.assign({}, state, {
		// 		loaded: true,
		// 		loading: false,
		// 		accountsIds: action.payload.map(a => a.guid)
		// 	});
		// }

		// case book.ADD_ACCOUNT_SUCCESS:
		// case book.REMOVE_ACCOUNT_FAIL: {
		// 	const account = action.payload;

		// 	if (state.accountIds.indexOf(account.guid) > -1) {
		// 		return state;
		// 	}

		// 	return Object.assign({}, state, {
		// 		ids: [...state.accountIds, account.guid]
		// 	});
		// }

		// case book.REMOVE_ACCOUNT_SUCCESS:
		// case book.ADD_ACCOUNT_FAIL: {
		// 	const account = action.payload;

		// 	return Object.assign({}, state, {
		// 		ids: state.accountIds.filter(id => id !== account.guid)
		// 	});
		// }

		default: {
			return state;
		}
	}
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getBook = (state: State) => state.book;
