import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';
import * as book from '../actions/book';
import { IUserInfo } from 'app/core/models/user-info';
import { AccountService } from '../services/account.service';

@Injectable()
export class BookEffects {
	@Effect()
	loadBook$: Observable<Action> = this.action$
		.ofType(book.LOAD)
		.switchMap(() => this.accountService.getBook())
		.map(b => new book.LoadSuccessAction(b))
		.catch(e => of(new book.LoadFailAction()));

	@Effect()
	loadAccounts$: Observable<Action> = this.action$
		.ofType(book.LOAD_ACCOUNTS)
		.switchMap(() => this.accountService.getAccounts())
		.map(accounts => new book.LoadAccountsSuccessAction(accounts))
		.catch(e => of(new book.LoadAccountsFailAction(e)));

	@Effect()
	loadSplits$: Observable<Action> = this.action$
		.ofType(book.LOAD_SPLITS)
		.map(toPayload)
		.switchMap(accountId => this.accountService.getSplits(accountId))
		.map(accounts => new book.LoadSplitsSuccessAction(accounts))
		.catch(e => of(new book.LoadSplitsFailAction(e)));

	constructor(private action$: Actions, private accountService: AccountService) {
	}
}
