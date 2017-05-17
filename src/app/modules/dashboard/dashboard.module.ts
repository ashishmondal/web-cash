import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { CommonModule } from "app/common/common.module";
import { DashboardRoutingModule } from "app/modules/dashboard/dashboard-routing.module";
import { MenuService, MenuGroup, MenuItem } from "app/shared/menu.service";

@NgModule({
	imports: [
		NgCommonModule,
		CommonModule,

		DashboardRoutingModule
	],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})
export class DashboardModule { 
	constructor(menuService: MenuService){
		menuService.menu.push(new MenuGroup(null, 0, [
			new MenuItem('Dashboard', 'home')
		]));
	}
}
