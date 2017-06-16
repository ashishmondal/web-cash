import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './core/reducers';
import { IUserInfo } from './core/models';
import * as user from './core/actions/user';

@Component({
	selector: 'wc-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	user$: Observable<IUserInfo>;
	constructor(private store: Store<fromRoot.State>) {
		this.user$ = store.select(fromRoot.getUser);
	}

	signIn() {
		this.store.dispatch(new user.SignInAction());
	}

	signOut() {
		this.store.dispatch(new user.SignOutAction());
	}
}
