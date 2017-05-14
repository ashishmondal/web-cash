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

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
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
