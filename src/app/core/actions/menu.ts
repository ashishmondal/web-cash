import { Action } from '@ngrx/store';
import { IMenuGroup, IMenuItem } from '../models';

export const ADD_GROUP = '[Menu] Add Group';
export const ADD_MENU = '[Menu] Add Menu';

export class AddMenuAction implements Action {
	readonly type = ADD_MENU;
	constructor(public payload: IMenuItem) { }
}

export class AddGroupAction implements Action {
	readonly type = ADD_GROUP;
	constructor(public payload: IMenuGroup) { }
}

export type Actions
	= AddMenuAction
	| AddGroupAction;
