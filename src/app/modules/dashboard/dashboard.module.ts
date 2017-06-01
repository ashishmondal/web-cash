import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { DashboardRoutingModule } from "app/modules/dashboard/dashboard-routing.module";
import { MenuService, MenuGroup, MenuItem } from "app/core/services/menu.service";

@NgModule({
	imports: [
		CommonModule,

		DashboardRoutingModule
	],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})
export class DashboardModule {
	constructor(menuService: MenuService){
		menuService.menu.push(new MenuGroup(null, 0, [
			new MenuItem('Dashboard', 'dashboard', ['/dashboard'])
		]));
	}
}
