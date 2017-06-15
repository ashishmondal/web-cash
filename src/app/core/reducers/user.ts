import * as user from '../actions/user';
import { IUserInfo } from '../models/user-info';

export interface State {
	signedOut: boolean;
	signingIn: boolean;
	signedIn: boolean;
	user: IUserInfo | null;
}

const initialState: State = {
	signedOut: true,
	signingIn: false,
	signedIn: false,
	user: null
};

export function reducer(state = initialState, action: user.Actions) {
	switch (action.type) {
		case user.SIGN_IN: {
			return Object.assign({}, state, {
				signingIn: false,
			});
		}
		case user.SIGN_IN_SUCCESS: {
			return Object.assign({}, state, {
				signedOut: false,
				signingIn: false,
				signedIn: true,
			})
		}
		case user.SIGN_IN_FAIL: {
			return Object.assign({}, state, {
				signedOut: true,
				signingIn: false,
				signedIn: false,
			})
		}
		case user.SIGN_OUT: {
			return Object.assign({}, state, {
				signedOut: true,
				signingIn: false,
				signedIn: false,
			})
		}
		default: return state;
	}
}

export const getSignedOut = (state: State) => state.signedOut;
export const getSigningIn = (state: State) => state.signingIn;
export const getSignedIn = (state: State) => state.signedIn;
export const getUser = (state: State) => state.user;
