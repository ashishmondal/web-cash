import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/mergeMap';

import * as user from '../actions/user';
import * as book from '../actions/book';
import * as account from '../actions/account';
import * as commodities from '../actions/commodity';
import { IUserInfo } from 'app/core/models/user-info';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserEffects {
	@Effect()
	signIn$: Observable<Action> = this.action$
		.ofType(user.SIGN_IN)
		.do(() => this.authService.signIn().catch(e => { throw e; }))
		.map(() => new user.SignInInitiatedAction())
		.catch(() => of(new user.SignInFailAction()));

	@Effect()
	signInSuccess$: Observable<Action> = this.action$
		.ofType(user.SIGN_IN_SUCCESS)
		.mergeMap(u => [
			new book.LoadAction(),
			new account.LoadAction(),
			new commodities.LoadAction()
		]);

	@Effect()
	signOut$: Observable<Action> = this.action$
		.ofType(user.SIGN_OUT)
		.do(() => this.authService.signOut().catch(e => { throw e; }))
		.map(() => new user.SignOutInitiatedAction())
		.catch(() => of(new user.SignOutFailAction()));

	constructor(private action$: Actions, private authService: AuthService) {
	}
}
