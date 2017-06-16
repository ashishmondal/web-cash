import { Action } from '@ngrx/store';
import { IUserInfo } from '../models/user-info';

export const SIGN_IN = '[User] Sign In';
export const SIGN_IN_INITIATED = '[User] Sign Initiated';
export const SIGN_IN_SUCCESS = '[User] Sign In Success';
export const SIGN_IN_FAIL = '[User] Sign In Fail';
export const SIGN_OUT = '[User] Sign Out';
export const SIGN_OUT_INITIATED = '[User] Sign Out Initiated';
export const SIGN_OUT_SUCCESS = '[User] Sign Out Success';
export const SIGN_OUT_FAIL = '[User] Sign Out Fail'

export class SignInAction implements Action {
	readonly type = SIGN_IN;
}

export class SignInInitiatedAction implements Action {
	readonly type = SIGN_IN_INITIATED;
}

export class SignInSuccessAction implements Action {
	readonly type = SIGN_IN_SUCCESS;
	constructor(public payload: IUserInfo) { }
}

export class SignInFailAction implements Action {
	readonly type = SIGN_IN_FAIL;
}

export class SignOutAction implements Action {
	readonly type = SIGN_OUT;
}

export class SignOutInitiatedAction implements Action {
	readonly type = SIGN_OUT_INITIATED;
}

export class SignOutSuccessAction implements Action {
	readonly type = SIGN_OUT_SUCCESS;
}

export class SignOutFailAction implements Action {
	readonly type = SIGN_OUT_FAIL;
}

export type Actions
	= SignInAction
	| SignInInitiatedAction
	| SignInFailAction
	| SignInSuccessAction
	| SignOutAction
	| SignOutInitiatedAction
	| SignOutSuccessAction
	| SignOutFailAction;
