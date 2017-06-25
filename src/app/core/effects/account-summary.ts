import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as accountSummaries from '../actions/account-summary';
import { AccountService } from '../services/account.service';

@Injectable()
export class AccountSummaryEffects {
	@Effect()
	loadAccountSummaries$: Observable<Action> = this.action$
		.ofType(accountSummaries.LOAD)
		.switchMap(() => this.accountService.getAccountSummary())
		.map(summaries => new accountSummaries.LoadSuccessAction(summaries))
		.catch(e => of(new accountSummaries.LoadFailAction(e)));

	constructor(private action$: Actions, private accountService: AccountService) {
	}
}
