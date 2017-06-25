import { tassign } from 'tassign';
import * as user from '../actions/user';
import { IUserInfo } from '../models';

export enum AuthState {
	SigningIn,
	SignedIn,
	SigningOut,
	SignedOut
}

export interface State {
	authBusy: boolean,
	authState: AuthState,
	user: IUserInfo | null;
}

const initialState: State = {
	authBusy: true,
	authState: AuthState.SigningIn,
	user: null
};

export function reducer(state = initialState, action: user.Actions) {
	switch (action.type) {
		case user.SIGN_IN_INITIATED: {
			return tassign(state, {
				authBusy: true,
				authState: AuthState.SigningIn
			});
		}
		case user.SIGN_IN_SUCCESS: {
			return tassign(state, {
				authBusy: false,
				authState: AuthState.SignedIn,
				user: action.payload
			});
		}
		case user.SIGN_IN_FAIL: {
			return tassign(state, {
				authBusy: false,
				authState: AuthState.SignedOut
			});
		}
		case user.SIGN_OUT_INITIATED: {
			return tassign(state, {
				authBusy: true,
				authState: AuthState.SigningOut,
			});
		}
		case user.SIGN_OUT_SUCCESS: {
			return tassign(state, {
				authBusy: false,
				authState: AuthState.SignedOut,
				user: null
			});
		}
		case user.SIGN_OUT_FAIL: {
			return tassign(state, {
				authBusy: false,
				authState: AuthState.SignedIn
			});
		}
		default: return state;
	}
}

export const getAuthState = (state: State) => state.authState;
export const getUser = (state: State) => state.user;
export const getAuthBusy = (state: State) => state.authBusy;
