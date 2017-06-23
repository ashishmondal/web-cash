import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from 'app/core/services/menu.service';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'app/core/services/auth.service';
import { AuthGuard } from 'app/core/services/auth-guard.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { DataService } from 'app/core/services/data.service';
import { CommodityService } from 'app/core/services/commodity.service';
import { AccountService } from 'app/core/services/account.service';

import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from 'app/core/reducers';

import { UserEffects } from 'app/core/effects/user';
import { BookEffects } from 'app/core/effects/book';
import { AccountEffects } from './effects/account';
import { CommoditiesEffects } from 'app/core/effects/commodities';
import { AccountSummaryEffects } from 'app/core/effects/account-summary';

@NgModule({
	imports: [
		CommonModule,

		StoreModule.provideStore(reducer),
		RouterStoreModule.connectRouter(),

		EffectsModule.run(UserEffects),
		EffectsModule.run(BookEffects),
		EffectsModule.run(AccountEffects),
		EffectsModule.run(AccountSummaryEffects),
		EffectsModule.run(CommoditiesEffects),

		StoreDevtoolsModule.instrumentOnlyWithExtension()
	],
	declarations: [],
	providers: [
		MenuService,
		Title,
		AuthService,
		AuthGuard,
		AngularFireAuth,
		DataService,
		CommodityService,
		AccountService
	]
})
export class CoreModule { }
