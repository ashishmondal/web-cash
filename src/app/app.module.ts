import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrimaryModule } from "./primary/primary.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MenuService } from "app/shared/menu.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,

		PrimaryModule,
	],
	providers: [MenuService, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
