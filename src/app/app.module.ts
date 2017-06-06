import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PrimaryModule } from "./primary/primary.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuth } from "angularfire2/auth";
import { CoreModule } from "app/core/core.module";
import { VizModule } from "app/shared/viz/viz.module";

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
		AngularFireModule.initializeApp(environment.firebase),
		VizModule.forRoot(),

		CoreModule,
		PrimaryModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
