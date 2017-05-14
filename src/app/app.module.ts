import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrimaryModule } from "./primary/primary.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AccountsSummaryComponent } from './accounts-summary/accounts-summary.component';
import { AccountTransactionsComponent } from './account-transactions/account-transactions.component';
import { TreeTableModule } from "primeng/components/treetable/treetable";
import { CommonModule } from "app/common/common.module";

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
		AccountsSummaryComponent,
		AccountTransactionsComponent,
	],
	imports: [
		CommonModule,
		TreeTableModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule,

		PrimaryModule,
		DashboardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
