import { Action } from '@ngrx/store';
import { IAccountSummary } from '../models/account-summary';

export const LOAD = '[Account Summary] Load';
export const LOAD_SUCCESS = '[Account Summary] Load Success';
export const LOAD_FAIL = '[Account Summary] Load Fail';


export class LoadAction implements Action {
	readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
	readonly type = LOAD_SUCCESS;

	constructor(public payload: IAccountSummary[]) { }
}

export class LoadFailAction implements Action {
	readonly type = LOAD_FAIL;

	constructor(public payload: any) { }
}


export type Actions
	= LoadAction
	| LoadSuccessAction
	| LoadFailAction;
