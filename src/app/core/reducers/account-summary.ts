import { tassign } from 'tassign';

import * as accountSummary from '../actions/account-summary';
import { IAccountSummary } from '../models';

export interface State {
	loading: boolean;
	loaded: boolean;
	entities: IAccountSummary[];
}

const initialState: State = {
	loading: false,
	loaded: false,
	entities: []
}

export function reducer(state = initialState, action: accountSummary.Actions){
	switch (action.type){
		case accountSummary.LOAD: {
			return tassign(state, {
				loading: true
			});
		}
		case accountSummary.LOAD_SUCCESS: {
			return tassign(state, {
				loading: false,
				loaded: true,
				entities: action.payload
			});
		}
		case accountSummary.LOAD_FAIL:{
			return tassign(state, {
				loading: false
			});
		}
		default: return state;
	}
}

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getEntities = (state: State) => state.entities;