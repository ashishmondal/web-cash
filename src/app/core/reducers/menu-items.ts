import * as menu from '../actions/menu';
import { IMenuItem } from '../models';
import { tassign } from 'tassign';

export interface State {
	menus: IMenuItem[],
	selectedMenu: string | null;
}

const initialState: State = {
	menus: [],
	selectedMenu: null
}

export function reducer(state = initialState, action: menu.Actions) {
	switch (action.type) {
		case menu.ADD_MENU: {
			return tassign(state, {
				menus: [...state.menus, action.payload]
			});
		}
		default: return state;
	}
}

export const getMenus = (state: State) => state.menus;
export const getSelected = (state: State) => state.selectedMenu;
