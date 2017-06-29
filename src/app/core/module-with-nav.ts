import { Store } from '@ngrx/store';
import { INavigationItem } from 'app/core/models';
import * as nav from 'app/core/actions/nav';

export abstract class ModuleWithNavigation<TState>{
	constructor(protected store: Store<TState>) {

	}

	protected addMenu(...menuGroups: IMenu[]) {
		menuGroups.forEach(mg => {
			this.store.dispatch(new nav.AddGroupAction({
				name: mg.name,
				order: mg.order
			}));

			mg.menuItems.forEach(mi => this.store.dispatch(new nav.AddItemAction(mi)));
		})
	}
}

export interface IMenu {
	name: string;
	order: number;
	menuItems: INavigationItem[];
}
