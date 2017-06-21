import { Action } from '@ngrx/store';
import { ICommodity } from '../models';



export const LOAD = '[Commodities] Load';
export const LOAD_SUCCESS = '[Commodities] Load Success';
export const LOAD_FAIL = '[Commodities] Load Fail';

export class LoadAction implements Action {
	readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
	readonly type = LOAD_SUCCESS;
	constructor(public payload: ICommodity[]) { }
}

export class LoadFailAction implements Action {
	readonly type = LOAD_FAIL;
}

export type Actions
	= LoadAction
	| LoadSuccessAction
	| LoadFailAction;
