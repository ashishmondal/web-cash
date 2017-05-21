import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { AccountsRoutingModule } from "app/modules/accounts/accounts-routing.module";
import { AccountsSummaryComponent } from "app/modules/accounts/accounts-summary/accounts-summary.component";
import { AccountTransactionsComponent } from "app/modules/accounts/account-transactions/account-transactions.component";
import { DataTableModule, SharedModule, TreeTableModule, CalendarModule } from 'primeng/primeng';
import { CommonModule } from "app/common/common.module";
import { MenuService, MenuGroup, MenuItem } from "app/shared/menu.service";
import { MdDatepickerModule, MdNativeDateModule, MdInputModule } from '@angular/material';
import { FormsModule } from "@angular/forms";

@NgModule({
	imports: [
		FormsModule,
		NgCommonModule,
		CommonModule,
		AccountsRoutingModule,
		DataTableModule,
		TreeTableModule,
		CalendarModule,

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
			new MenuItem('Summary', 'bank', ['/accounts'])
		]));
	}

}
