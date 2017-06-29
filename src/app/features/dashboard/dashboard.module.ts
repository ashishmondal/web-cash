import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PieModule } from 'app/shared/viz/pie/pie.module';
import { ModuleWithNavigation } from 'app/core/module-with-nav';

import * as fromRoot from 'app/core/reducers';
import * as menu from 'app/core/actions/menu';

@NgModule({
	imports: [
		CommonModule,
		PieModule,

		DashboardRoutingModule
	],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})
export class DashboardModule extends ModuleWithNavigation<fromRoot.State> {
	constructor(store: Store<fromRoot.State>) {
		super(store);
		super.addMenu({
			name: '',
			order: 0,
			menuItems: [
				{
					groupName: '',
					icon: 'dashboard',
					text: 'Dashboard',
					routerLink: ['/dashboard']
				}
			]
		});
	}
}
