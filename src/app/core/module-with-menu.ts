import { Store } from '@ngrx/store';
import { IMenuItem } from 'app/core/models';
import * as menu from 'app/core/actions/menu';

export abstract class ModuleWithMenus<TState>{
	constructor(protected store: Store<TState>) {

	}

	protected addMenu(...menuGroups: IMenu[]) {
		menuGroups.forEach(mg => {
			this.store.dispatch(new menu.AddGroupAction({
				name: mg.name,
				order: mg.order
			}));

			mg.menuItems.forEach(mi => this.store.dispatch(new menu.AddMenuAction(mi)));
		})
	}
}

export interface IMenu {
	name: string;
	order: number;
	menuItems: IMenuItem[];
}
