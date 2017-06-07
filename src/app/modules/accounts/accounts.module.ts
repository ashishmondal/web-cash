import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsRoutingModule } from "app/modules/accounts/accounts-routing.module";
import { AccountsSummaryComponent } from "app/modules/accounts/accounts-summary/accounts-summary.component";
import { AccountTransactionsComponent } from "app/modules/accounts/account-transactions/account-transactions.component";
import { SharedModule as PrimeSharedModule, TreeTableModule } from 'primeng/primeng';
import { MenuService, MenuGroup, MenuItem } from "app/core/services//menu.service";
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";

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
