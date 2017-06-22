import { Action } from '@ngrx/store';
import { IBook } from 'app/core/models';

export const LOAD = '[Book] Load';
export const LOAD_SUCCESS = '[Book] Load Success';
export const LOAD_FAIL = '[Book] Load Fail';

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

export type BookActions
	= LoadAction
	| LoadSuccessAction
	| LoadFailAction;
