import { Action } from '@ngrx/store';
import { ITransaction } from '../models/transaction';

export const ADD_TRANSACTION = '[Transactions] Add Transaction';
export const ADD_TRANSACTION_SUCCESS = '[Transactions] Add Transaction Success';
export const ADD_TRANSACTION_FAIL = '[Transactions] Add Transaction Fail';
export const REMOVE_TRANSACTION = '[Transactions] Remove Transaction';
export const REMOVE_TRANSACTION_SUCCESS = '[Transactions] Remove Transaction Success';
export const REMOVE_TRANSACTION_FAIL = '[Transactions] Remove Transaction Fail';

/**
 * Add Transaction to Transactions Actions
 */
export class AddTransactionAction implements Action {
	readonly type = ADD_TRANSACTION;

	constructor(public payload: ITransaction) { }
}

export class AddTransactionSuccessAction implements Action {
	readonly type = ADD_TRANSACTION_SUCCESS;

	constructor(public payload: ITransaction) { }
}

export class AddTransactionFailAction implements Action {
	readonly type = ADD_TRANSACTION_FAIL;

	constructor(public payload: ITransaction) { }
}


/**
 * Remove Transaction from Transactions Actions
 */
export class RemoveTransactionAction implements Action {
	readonly type = REMOVE_TRANSACTION;

	constructor(public payload: ITransaction) { }
}

export class RemoveTransactionSuccessAction implements Action {
	readonly type = REMOVE_TRANSACTION_SUCCESS;

	constructor(public payload: ITransaction) { }
}

export class RemoveTransactionFailAction implements Action {
	readonly type = REMOVE_TRANSACTION_FAIL;

	constructor(public payload: ITransaction) { }
}

export type Actions
	= AddTransactionAction
	| AddTransactionSuccessAction
	| AddTransactionFailAction
	| RemoveTransactionAction
	| RemoveTransactionSuccessAction
	| RemoveTransactionFailAction;
