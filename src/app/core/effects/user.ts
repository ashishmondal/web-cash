import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as user from '../actions/user';
import { IUserInfo } from 'app/core/models/user-info';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserEffects {
	@Effect()
	signIn$: Observable<Action> = this.action$
		.ofType(user.SIGN_IN)
		.switchMap(() => this.authService.login())
		.switchMap(() => this.authService.user$)
		.map(u => !!u ? new user.SignInSuccessAction(u) : new user.SignInFailAction())
		.catch(() => of(new user.SignInFailAction()));

	constructor(private action$: Actions, private authService: AuthService) {
	}
}
