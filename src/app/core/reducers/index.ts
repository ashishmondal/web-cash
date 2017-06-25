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
import * as fromSplits from './splits';
import * as fromMenuGroups from './menu-groups';
import * as fromMenuItems from './menu-items';
import * as fromAccountSummary from './account-summary';
import * as fromCommodities from './commodities';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
	user: fromUser.State;
	router: fromRouter.RouterState;
	accounts: fromAccounts.State;
	book: fromBook.State;
	transactions: fromTransactions.State;
	splits: fromSplits.State;
	menuGroups: fromMenuGroups.State;
	menuItems: fromMenuItems.State;
	accountSummary: fromAccountSummary.State;
	commodities: fromCommodities.State;
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
	transactions: fromTransactions.reducer,
	splits: fromSplits.reducer,
	menuGroups: fromMenuGroups.reducer,
	menuItems: fromMenuItems.reducer,
	accountSummary: fromAccountSummary.reducer,
	commodities: fromCommodities.reducer
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

// Boook

export const getBookState = (state: State) => state.book;
export const getBookLoading = createSelector(getBookState, fromBook.getLoading);
export const getBookLoaded = createSelector(getBookState, fromBook.getLoaded);
export const getBook = createSelector(getBookState, fromBook.getBook);

// Accounts
export const getAccountsState = (state: State) => state.accounts;
export const getAccountsLoading = createSelector(getAccountsState, fromAccounts.getLoading);
export const getAccountsLoadied = createSelector(getAccountsState, fromAccounts.getLoaded);
export const getAccounts = createSelector(getAccountsState, fromAccounts.getAccounts);
export const getSelectedAccountId = createSelector(getAccountsState, fromAccounts.getSelectedId);

// Splits
export const getSplitsState = (state: State) => state.splits;
export const getSplitsLoading = createSelector(getSplitsState, fromSplits.getLoading);
export const getSplitsLoadied = createSelector(getSplitsState, fromSplits.getLoaded);
export const getSplits = createSelector(getSplitsState, fromSplits.getEntities);
export const getSelectedSplitId = createSelector(getSplitsState, fromSplits.getSelectedId);

// Transactions
export const getTransactionsState = (state: State) => state.transactions;
export const getTransactionsLoading = createSelector(getTransactionsState, fromTransactions.getLoading);
export const getTransactionsLoadied = createSelector(getTransactionsState, fromTransactions.getLoaded);
export const getTransactions = createSelector(getTransactionsState, fromTransactions.getEntities);
export const getSelectedTransactionId = createSelector(getTransactionsState, fromTransactions.getSelectedId);

// Menu
export const getMenuGroupsState = (state: State) => state.menuGroups;
export const getMenuGroupNames = createSelector(getMenuGroupsState, fromMenuGroups.getNames);
export const getMenuGroupEntities = createSelector(getMenuGroupsState, fromMenuGroups.getEntities);
export const getMenuGroups = createSelector(getMenuGroupNames, getMenuGroupEntities,
	(names, entities) => names.map(n => entities[n]));

export const getMenuItemsState = (state: State) => state.menuItems;
export const getMenuItems = createSelector(getMenuItemsState, fromMenuItems.getMenus);

export const getMenu = createSelector(getMenuGroups, getMenuItems, (groups, menuItems) => {
	return groups
		.sort((ga, gb) => ga.order - gb.order)
		.map(g => ({
			name: g.name,
			menuItems: menuItems.filter(mi => mi.groupName === g.name)
		}));
});

// Account Summary
export const getAccountSummaryState = (state: State) => state.accountSummary;
export const getAccountSummaryLoading = createSelector(getAccountSummaryState, fromAccountSummary.getLoading);
export const getAccountSummaryLoaded = createSelector(getAccountSummaryState, fromAccountSummary.getLoaded);
export const getAccountSummaryEntities = createSelector(getAccountSummaryState, fromAccountSummary.getEntities);

// export const getAccountSummary = createSelector(getAccounts, getAccountSummaryEntities, (accounts, summaries) => {
// 	return summaries.map(s => Object.assign({}, s, accounts[s.guid]));
// });

// Commodities
export const getCommoditiesState = (state: State) => state.commodities;
export const getCommoditiesLoading = createSelector(getCommoditiesState, fromCommodities.getLoading);
export const getCommoditiesLoaded = createSelector(getCommoditiesState, fromCommodities.getLoaded);
export const getCommodities = createSelector(getCommoditiesState, fromCommodities.getEntities);

export const getAppBusy = createSelector(
	getUserAuthStateBusy,
	getBookLoading,
	getAccountsLoading,
	getCommoditiesLoading,
	getAccountSummaryLoading,
	getTransactionsLoading,
	getSplitsLoading,
	(u, b, a, c, as, s) => u || b || a || c || as || s);
