import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AngularFireModule } from 'angularfire2';

import { PrimaryModule } from './primary/primary.module';
import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent,
	],
	imports: [
		PerfectScrollbarModule.forRoot(),
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		MdSidenavModule,
		AngularFireModule.initializeApp(environment.firebase),

		CoreModule,
		PrimaryModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
