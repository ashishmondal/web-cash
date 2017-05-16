import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "app/modules/dashboard/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { AccountsSummaryComponent } from "app/modules/accounts/accounts-summary/accounts-summary.component";
import { AccountTransactionsComponent } from "app/modules/accounts/account-transactions/account-transactions.component";

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