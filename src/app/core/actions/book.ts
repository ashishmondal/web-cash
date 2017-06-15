import { Action } from '@ngrx/store';
import { IAccount } from '../models/account';


export const ADD_ACCOUNT = '[Book] Add Account';
export const ADD_ACCOUNT_SUCCESS = '[Book] Add Account Success';
export const ADD_ACCOUNT_FAIL = '[Book] Add Account Fail';
export const REMOVE_ACCOUNT = '[Book] Remove Account';
export const REMOVE_ACCOUNT_SUCCESS = '[Book] Remove Account Success';
export const REMOVE_ACCOUNT_FAIL = '[Book] Remove Account Fail';
export const LOAD = '[Book] Load';
export const LOAD_SUCCESS = '[Book] Load Success';
export const LOAD_FAIL = '[Book] Load Fail';


/**
 * Add Account to Book Actions
 */
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

/**
 * Load Book Actions
 */
export class LoadAction implements Action {
	readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
	readonly type = LOAD_SUCCESS;

	constructor(public payload: IAccount[]) { }
}

export class LoadFailAction implements Action {
	readonly type = LOAD_FAIL;

	constructor(public payload: any) { }
}


export type Actions
	= AddAccountAction
	| AddAccountSuccessAction
	| AddAccountFailAction
	| RemoveAccountAction
	| RemoveAccountSuccessAction
	| RemoveAccountFailAction
	| LoadAction
	| LoadSuccessAction
	| LoadFailAction;
