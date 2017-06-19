import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountsSummaryComponent } from './accounts-summary/accounts-summary.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';

const accountsRoutes: Routes = [
	{ path: '', component: AccountsSummaryComponent },
	{ path: ':id', component: AccountTransactionsComponent },
];

@NgModule({
	imports: [
		RouterModule.forChild(accountsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AccountsRoutingModule { }
