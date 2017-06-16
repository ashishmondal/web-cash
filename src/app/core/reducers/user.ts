import * as user from '../actions/user';
import { IUserInfo } from '../models/user-info';

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
			return Object.assign({}, state, {
				authBusy: true,
				authorizationState: AuthState.SigningIn
			});
		}
		case user.SIGN_IN_SUCCESS: {
			return Object.assign({}, state, {
				authBusy: false,
				authorizationState: AuthState.SignedIn,
				user: action.payload
			});
		}
		case user.SIGN_IN_FAIL: {
			return Object.assign({}, state, {
				authBusy: false,
				authorizationState: AuthState.SignedOut
			});
		}
		case user.SIGN_OUT_INITIATED: {
			return Object.assign({}, state, {
				authBusy: true,
				authorizationState: AuthState.SigningOut,
			});
		}
		case user.SIGN_OUT_SUCCESS: {
			return Object.assign({}, state, {
				authBusy: false,
				authorizationState: AuthState.SignedOut,
				user: null
			});
		}
		case user.SIGN_OUT_FAIL: {
			return Object.assign({}, state, {
				authBusy: false,
				authorizationState: AuthState.SignedIn
			});
		}
		default: return state;
	}
}

export const getAuthState = (state: State) => state.authState;
export const getUser = (state: State) => state.user;
export const getAuthBusy = (state: State) => state.authBusy;
