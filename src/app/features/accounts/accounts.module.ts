import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdDatepickerModule, MdNativeDateModule, MdInputModule, MdButtonModule } from '@angular/material';

import { SharedModule } from 'app/shared/shared.module';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsSummaryComponent } from './accounts-summary/accounts-summary.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { ModuleWithMenus } from 'app/core/module-with-menu';
import * as fromRoot from 'app/core/reducers';
import { Store } from '@ngrx/store';

@NgModule({
	imports: [
		FormsModule,
		SharedModule,
		CommonModule,

		AccountsRoutingModule,

		MdInputModule,
		MdDatepickerModule,
		MdNativeDateModule,
		MdButtonModule
	],
	declarations: [
		AccountsSummaryComponent,
		AccountTransactionsComponent
	]
})
export class AccountsModule extends ModuleWithMenus<fromRoot.State> {
	constructor(store: Store<fromRoot.State>) {
		super(store);
		super.addMenu({
			name: 'Accounts',
			order: 1,
			menuItems: [
				{
					groupName: 'Accounts',
					icon: 'account_balance',
					text: 'Summary',
					routerLink: ['/accounts']
				}
			]
		});
	}

}
