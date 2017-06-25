import { Action } from '@ngrx/store';
import { ISplit } from 'app/core/models';


export const LOAD_SPLITS = '[Book] Load Splits';
export const LOAD_SPLITS_SUCCESS = '[Book] Load Splits Success';
export const LOAD_SPLITS_FAIL = '[Book] Load Splits Fail';
export const ADD_SPLIT = '[Book] Add Split';
export const ADD_SPLIT_SUCCESS = '[Book] Add Split Success';
export const ADD_SPLIT_FAIL = '[Book] Add Split Fail';
export const REMOVE_SPLIT = '[Book] Remove Split';
export const REMOVE_SPLIT_SUCCESS = '[Book] Remove Split Success';
export const REMOVE_SPLIT_FAIL = '[Book] Remove Split Fail';

export class LoadSplitsAction implements Action {
	readonly type = LOAD_SPLITS;

	constructor(public payload: string /* Account GUID */) { }
}

export class LoadSplitsSuccessAction implements Action {
	readonly type = LOAD_SPLITS_SUCCESS;

	constructor(public payload: ISplit[]) { }
}

export class LoadSplitsFailAction implements Action {
	readonly type = LOAD_SPLITS_FAIL;

	constructor(public payload: any) { }
}

export class AddSplitAction implements Action {
	readonly type = ADD_SPLIT;

	constructor(public payload: ISplit) { }
}

export class AddSplitSuccessAction implements Action {
	readonly type = ADD_SPLIT_SUCCESS;

	constructor(public payload: ISplit) { }
}

export class AddSplitFailAction implements Action {
	readonly type = ADD_SPLIT_FAIL;

	constructor(public payload: ISplit) { }
}


/**
 * Remove Split from Book Actions
 */
export class RemoveSplitAction implements Action {
	readonly type = REMOVE_SPLIT;

	constructor(public payload: ISplit) { }
}

export class RemoveSplitSuccessAction implements Action {
	readonly type = REMOVE_SPLIT_SUCCESS;

	constructor(public payload: ISplit) { }
}

export class RemoveSplitFailAction implements Action {
	readonly type = REMOVE_SPLIT_FAIL;

	constructor(public payload: ISplit) { }
}

export type SplitActions
	= AddSplitAction
	| AddSplitSuccessAction
	| AddSplitFailAction
	| RemoveSplitAction
	| RemoveSplitSuccessAction
	| RemoveSplitFailAction
	| LoadSplitsAction
	| LoadSplitsSuccessAction
	| LoadSplitsFailAction;
