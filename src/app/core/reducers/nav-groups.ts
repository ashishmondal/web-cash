import * as nav from '../actions/nav';
import { INavigationGroup } from '../models';
import { tassign } from 'tassign';

export interface State {
	names: string[];
	entities: { [name: string]: INavigationGroup };
	selectedGroup: string | null;
}

const initialState: State = {
	names: [],
	entities: {},
	selectedGroup: null
}

export function reducer(state = initialState, action: nav.Actions) {
	switch (action.type) {
		case nav.ADD_GROUP: {
			return tassign(state, {
				names: [...state.names, action.payload.name],
				entities: tassign(state.entities, {
					[action.payload.name]: action.payload
				})
			});
		}
		default: return state;
	}
}

export const getNames = (state: State) => state.names;
export const getEntities = (state: State) => state.entities;
export const getSelected = (state: State) => state.selectedGroup;
