import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AngularFireModule } from 'angularfire2';

import { PrimaryModule } from './primary/primary.module';
import { CoreModule } from 'app/core/core.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { reducer } from 'app/core/reducers';

import { UserEffects } from 'app/core/effects/user';
import { BookEffects } from 'app/core/effects/book';
import { AccountSummaryEffects } from 'app/core/effects/account-summary';

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
		AngularFireModule.initializeApp(environment.firebase),


		/**
		 * StoreModule.provideStore is imported once in the root module, accepting a reducer
		 * function or object map of reducer functions. If passed an object of
		 * reducers, combineReducers will be run creating your application
		 * meta-reducer. This returns all providers for an @ngrx/store
		 * based application.
		 */
		StoreModule.provideStore(reducer),

		/**
		 * @ngrx/router-store keeps router state up-to-date in the store and uses
		 * the store as the single source of truth for the router's state.
		 */
		RouterStoreModule.connectRouter(),

		/**
		 * EffectsModule.run() sets up the effects class to be initialized
		 * immediately when the application starts.
		 *
		 * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
		 */
		EffectsModule.run(UserEffects),
		EffectsModule.run(BookEffects),
		EffectsModule.run(AccountSummaryEffects),

		/**
		 * Store devtools instrument the store retaining past versions of state
		 * and recalculating new states. This enables powerful time-travel
		 * debugging.
		 *
		 * To use the debugger, install the Redux Devtools extension for either
		 * Chrome or Firefox
		 *
		 * See: https://github.com/zalmoxisus/redux-devtools-extension
		 */
		StoreDevtoolsModule.instrumentOnlyWithExtension(),

		CoreModule,
		PrimaryModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
