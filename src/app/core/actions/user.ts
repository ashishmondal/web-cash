import { Action } from '@ngrx/store';
import { IUserInfo } from '../models/user-info';

export const SIGN_IN = '[User] Sign In';
export const SIGN_OUT = '[User] Sign Out';
export const SIGN_IN_SUCCESS = '[User] Sign In Success';
export const SIGN_IN_FAIL = '[User] Sign In Fail';

export class SignInAction implements Action {
	readonly type = SIGN_IN;
}

export class SignOutAction implements Action {
	readonly type = SIGN_OUT;
}

export class SignInSuccessAction implements Action {
	readonly type = SIGN_IN_SUCCESS;
	constructor(public payload: IUserInfo) { }
}

export class SignInFailAction implements Action {
	readonly type = SIGN_IN_FAIL;
}

export type Actions
	= SignInAction
	| SignOutAction
	| SignInFailAction
	| SignInSuccessAction;
