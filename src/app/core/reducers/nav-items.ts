import * as nav from '../actions/nav';
import { INavigationItem } from '../models';
import { tassign } from 'tassign';

export interface State {
	items: INavigationItem[],
	selectedItem: string | null;
}

const initialState: State = {
	items: [],
	selectedItem: null
}

export function reducer(state = initialState, action: nav.Actions) {
	switch (action.type) {
		case nav.ADD_ITEM: {
			return tassign(state, {
				items: [...state.items, action.payload]
			});
		}
		default: return state;
	}
}

export const getItems = (state: State) => state.items;
export const getSelected = (state: State) => state.selectedItem;
