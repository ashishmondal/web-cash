import { Action } from '@ngrx/store';
import { INavigationGroup, INavigationItem } from '../models';

export const ADD_GROUP = '[Nav] Add Group';
export const ADD_ITEM = '[Nav] Add Menu';

export class AddItemAction implements Action {
	readonly type = ADD_ITEM;
	constructor(public payload: INavigationItem) { }
}

export class AddGroupAction implements Action {
	readonly type = ADD_GROUP;
	constructor(public payload: INavigationGroup) { }
}

export type Actions
	= AddItemAction
	| AddGroupAction;
