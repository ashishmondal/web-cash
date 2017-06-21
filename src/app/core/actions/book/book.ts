import { Action } from '@ngrx/store';
import { IBook, IAccount } from 'app/core/models';


export const LOAD = '[Book] Load';
export const LOAD_SUCCESS = '[Book] Load Success';
export const LOAD_FAIL = '[Book] Load Fail';
export const LOAD_ACCOUNTS = '[Book] Load Accounts';
export const LOAD_ACCOUNTS_SUCCESS = '[Book] Load Accounts Success';
export const LOAD_ACCOUNTS_FAIL = '[Book] Load Accounts Fail';
export const ADD_ACCOUNT = '[Book] Add Account';
export const ADD_ACCOUNT_SUCCESS = '[Book] Add Account Success';
export const ADD_ACCOUNT_FAIL = '[Book] Add Account Fail';
export const REMOVE_ACCOUNT = '[Book] Remove Account';
export const REMOVE_ACCOUNT_SUCCESS = '[Book] Remove Account Success';
export const REMOVE_ACCOUNT_FAIL = '[Book] Remove Account Fail';

export const LOAD_COMMODITIES_SUCCESS = '[Book] Load Commodities Success';
export const LOAD_COMMODITIES_FAIL = '[Book] Load Commodities Fail';
export const ADD_COMMODITY = '[Book] Add Commodity';
export const ADD_COMMODITY_SUCCESS = '[Book] Add Commodity Success';
export const ADD_COMMODITY_FAIL = '[Book] Add Commodity Fail';
export const REMOVE_COMMODITY = '[Book] Remove Commodity';
export const REMOVE_COMMODITY_SUCCESS = '[Book] Remove Commodity Success';
export const REMOVE_COMMODITY_FAIL = '[Book] Remove Commodity Fail';

export class LoadAction implements Action {
	readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
	readonly type = LOAD_SUCCESS;
	constructor(public payload: IBook) { }
}

export class LoadFailAction implements Action {
	readonly type = LOAD_FAIL;
}

export class LoadAccountsAction implements Action {
	readonly type = LOAD_ACCOUNTS;
}

export class LoadAccountsSuccessAction implements Action {
	readonly type = LOAD_ACCOUNTS_SUCCESS;

	constructor(public payload: IAccount[]) { }
}

export class LoadAccountsFailAction implements Action {
	readonly type = LOAD_ACCOUNTS_FAIL;

	constructor(public payload: any) { }
}

export class AddAccountAction implements Action {
	readonly type = ADD_ACCOUNT;

	constructor(public payload: IAccount) { }
}

export class AddAccountSuccessAction implements Action {
	readonly type = ADD_ACCOUNT_SUCCESS;

	constructor(public payload: IAccount) { }
}

export class AddAccountFailAction implements Action {
	readonly type = ADD_ACCOUNT_FAIL;

	constructor(public payload: IAccount) { }
}


/**
 * Remove Account from Book Actions
 */
export class RemoveAccountAction implements Action {
	readonly type = REMOVE_ACCOUNT;

	constructor(public payload: IAccount) { }
}

export class RemoveAccountSuccessAction implements Action {
	readonly type = REMOVE_ACCOUNT_SUCCESS;

	constructor(public payload: IAccount) { }
}

export class RemoveAccountFailAction implements Action {
	readonly type = REMOVE_ACCOUNT_FAIL;

	constructor(public payload: IAccount) { }
}



export type Actions
	= LoadAction
	| LoadSuccessAction
	| LoadFailAction
	| AddAccountAction
	| AddAccountSuccessAction
	| AddAccountFailAction
	| RemoveAccountAction
	| RemoveAccountSuccessAction
	| RemoveAccountFailAction
	| LoadAccountsAction
	| LoadAccountsSuccessAction
	| LoadAccountsFailAction;
