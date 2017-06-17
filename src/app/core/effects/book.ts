import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as book from '../actions/book';
import { IUserInfo } from 'app/core/models/user-info';
import { AccountService } from '../services/account.service';

@Injectable()
export class BookEffects {
	@Effect()
	loadAccounts$: Observable<Action> = this.action$
		.ofType(book.LOAD)
		.switchMap(() => this.accountService.getAccounts())
		.map(accounts => new book.LoadSuccessAction(accounts))
		.catch(e => of(new book.LoadFailAction(e)));

	constructor(private action$: Actions, private accountService: AccountService) {
	}
}
