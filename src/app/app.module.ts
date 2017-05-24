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
import { AuthService } from "app/core/auth.service";
import { AuthGuard } from "app/core/auth-guard.service";
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';

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

		PrimaryModule,
	],
	providers: [MenuService, Title, AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
