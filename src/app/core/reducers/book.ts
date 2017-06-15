import * as collection from '../actions/book';

export interface State {
	loaded: boolean;
	loading: boolean;
	accountIds: string[];
};

const initialState: State = {
	loaded: false,
	loading: false,
	accountIds: []
};

export function reducer(state = initialState, action: collection.Actions): State {
	switch (action.type) {
		case collection.LOAD: {
			return Object.assign({}, state, {
				loading: true
			});
		}

		case collection.LOAD_SUCCESS: {
			const accounts = action.payload;

			return {
				loaded: true,
				loading: false,
				accountIds: accounts.map(account => account.guid)
			};
		}

		case collection.ADD_ACCOUNT_SUCCESS:
		case collection.REMOVE_ACCOUNT_FAIL: {
			const account = action.payload;

			if (state.accountIds.indexOf(account.guid) > -1) {
				return state;
			}

			return Object.assign({}, state, {
				ids: [...state.accountIds, account.guid]
			});
		}

		case collection.REMOVE_ACCOUNT_SUCCESS:
		case collection.ADD_ACCOUNT_FAIL: {
			const account = action.payload;

			return Object.assign({}, state, {
				ids: state.accountIds.filter(id => id !== account.guid)
			});
		}

		default: {
			return state;
		}
	}
}


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getAccountIds = (state: State) => state.accountIds;
