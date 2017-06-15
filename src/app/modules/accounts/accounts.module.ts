import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';

import { SharedModule as PrimeSharedModule, TreeTableModule } from 'primeng/primeng';

import { MenuService, MenuGroup, MenuItem } from 'app/core/services/menu.service';
import { SharedModule } from 'app/shared/shared.module';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsSummaryComponent } from './accounts-summary/accounts-summary.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';

@NgModule({
	imports: [
		FormsModule,
		SharedModule,
		CommonModule,

		AccountsRoutingModule,
		PrimeSharedModule,
		TreeTableModule,

		MdInputModule,
		MdDatepickerModule,
		MdNativeDateModule
	],
	declarations: [
		AccountsSummaryComponent,
		AccountTransactionsComponent
	]
})
export class AccountsModule {
	constructor(menuService: MenuService) {
		menuService.menu.push(new MenuGroup('Accounts', 1, [
			new MenuItem('Summary', 'account_balance', ['/accounts'])
		]));
	}

}
