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
	initiateSignIn$: Observable<Action> = this.action$
		.ofType(user.SIGN_IN)
		.do(() => this.authService.signIn())
		.map(() => new user.SignInInitiatedAction())
		.catch(e => of(new user.SignInFailAction(e)));

	@Effect()
	signInSuccess$: Observable<Action> = this.action$
		.ofType(user.SIGN_IN_SUCCESS)
		.mergeMap(u => [
			new book.LoadAction(),
			new book.LoadAccountsAction(),
			new commodities.LoadAction()
		]);

	@Effect()
	signOut$: Observable<Action> = this.action$
		.ofType(user.SIGN_OUT)
		.do(() => this.authService.signOut())
		.map(() => new user.SignOutInitiatedAction())
		.catch(e => of(new user.SignOutFailAction(e)));

	constructor(private action$: Actions, private authService: AuthService) {
	}
}
