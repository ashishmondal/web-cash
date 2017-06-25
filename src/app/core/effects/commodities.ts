import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import * as commodities from '../actions/commodity';
import { IUserInfo } from 'app/core/models/user-info';
import { AccountService } from '../services/account.service';

@Injectable()
export class CommoditiesEffects {
	@Effect()
	loadBook$: Observable<Action> = this.action$
		.ofType(commodities.LOAD)
		.switchMap(() => this.accountService.getCommodities())
		.map(b => new commodities.LoadSuccessAction(b))
		.catch(e => of(new commodities.LoadFailAction()));

	constructor(private action$: Actions, private accountService: AccountService) {
	}
}
