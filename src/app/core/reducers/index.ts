import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from 'environments/environment';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromUser from './user';
import * as fromAccounts from './accounts';
import * as fromBook from './book';
import * as fromTransactions from './transactions';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
	user: fromUser.State;
	accounts: fromAccounts.State;
	books: fromBook.State;
	transactions: fromTransactions.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
	user: fromUser.reducer,
	accounts: fromAccounts.reducer,
	book: fromBook.reducer,
	transactions: fromTransactions.reducer
}

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}

// Users
export const getUserState = (state: State) => state.user;
export const getUserAuthState = createSelector(getUserState, fromUser.getAuthState);
export const getUser = createSelector(getUserState, fromUser.getUser);
export const getUserAuthStateBusy = createSelector(getUserState, fromUser.getAuthBusy);

// Accounts
export const getAccountsState = (state: State) => state.accounts;
export const getAccounts = createSelector(getAccountsState, fromAccounts.getAccounts);


