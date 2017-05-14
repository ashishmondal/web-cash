import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard/dashboard.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { AccountsSummaryComponent } from "app/accounts-summary/accounts-summary.component";
import { AccountTransactionsComponent } from "app/account-transactions/account-transactions.component";

const appRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'accounts', component: AccountsSummaryComponent },
	 { path: 'accounts/:id', component: AccountTransactionsComponent },
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }