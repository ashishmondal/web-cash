import { Action } from '@ngrx/store';
import { ITransaction } from '../models/transaction';

export const SELECT_ACCOUNT = '[Account] Select Account';

export const LOAD_TRANSACTIONS = '[Account] Load Transactions';
export const LOAD_TRANSACTIONS_SUCCESS = '[Account] Load Transactions Success';
export const LOAD_TRANSACTIONS_FAIL = '[Account] Load Transactions Fail';
export const ADD_TRANSACTION = '[Account] Add Transaction';
export const ADD_TRANSACTION_SUCCESS = '[Account] Add Transaction Success';
export const ADD_TRANSACTION_FAIL = '[Account] Add Transaction Fail';
export const REMOVE_TRANSACTION = '[Account] Remove Transaction';
export const REMOVE_TRANSACTION_SUCCESS = '[Account] Remove Transaction Success';
export const REMOVE_TRANSACTION_FAIL = '[Account] Remove Transaction Fail';

export class SelectAccountAction implements Action {
	readonly type = SELECT_ACCOUNT;

	constructor(public payload: string) { }
}

export class LoadTransactionsAction implements Action {
	readonly type = LOAD_TRANSACTIONS;

	constructor(
		/**
		 * Account GUID
		 */
		public payload: string
	) { }
}

export class LoadTransactionsSuccessAction implements Action {
	readonly type = LOAD_TRANSACTIONS_SUCCESS;

	constructor(public payload: ITransaction[]) { }
}

export class LoadTransactionsFailAction implements Action {
	readonly type = LOAD_TRANSACTIONS_FAIL;

	constructor(public payload: any) { }
}

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
	= SelectAccountAction
	| LoadTransactionsAction
	| LoadTransactionsSuccessAction
	| LoadTransactionsFailAction
	| AddTransactionAction
	| AddTransactionSuccessAction
	| AddTransactionFailAction
	| RemoveTransactionAction
	| RemoveTransactionSuccessAction
	| RemoveTransactionFailAction;
