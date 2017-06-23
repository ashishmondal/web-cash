import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import * as account from '../actions/account';
import { AccountService } from '../services/account.service';

@Injectable()
export class AccountEffects {
	@Effect()
	loadTransactions$: Observable<Action> = this.action$
		.ofType(account.LOAD_TRANSACTIONS)
		.map(toPayload)
		.switchMap(guid => this.accountService.getTransactions(guid))
		.map(accounts => new account.LoadTransactionsSuccessAction(accounts))
		.catch(e => of(new account.LoadAccountsFailAction(e)));

	constructor(private action$: Actions, private accountService: AccountService) {
	}
}
