import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { DashboardRoutingModule } from "app/modules/dashboard/dashboard-routing.module";
import { MenuService, MenuGroup, MenuItem } from "app/core/services/menu.service";
import { PieModule } from "app/shared/viz/pie/pie.module";
import { Store } from "@ngrx/store";
import * as fromRoot from 'app/core/reducers';
import * as menu from 'app/core/actions/menu';
import { ModuleWithMenus } from "app/core/module-with-menu";

@NgModule({
	imports: [
		CommonModule,
		PieModule,

		DashboardRoutingModule
	],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})
export class DashboardModule extends ModuleWithMenus<fromRoot.State> {
	constructor(store: Store<fromRoot.State>) {
		super(store);
		super.addMenu({
			name: 'Home',
			order: 0,
			menuItems: [
				{
					groupName: 'Home',
					icon: 'dashboard',
					text: 'Dashboard',
					routerLink: ['/dashboard']
				}
			]
		});
	}
}
