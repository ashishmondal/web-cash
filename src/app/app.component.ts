import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from './core/reducers';
import { IUserInfo } from './core/models';
import * as user from './core/actions/user';
import * as book from './core/actions/book';

@Component({
	selector: 'wc-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	user$: Observable<IUserInfo>;
	menu$: Observable<any>;

	isBusy$: Observable<boolean>;
	constructor(private store: Store<fromRoot.State>) {
		this.user$ = store.select(fromRoot.getUser);
		this.isBusy$ = store.select(fromRoot.getUserAuthStateBusy);
		this.menu$ = store.select(fromRoot.getMenu);

		this.user$
			.filter(u => !!u)
			.subscribe(u => this.store.dispatch(new book.LoadAction()));
	}

	signIn() {
		this.store.dispatch(new user.SignInAction());
	}

	signOut() {
		this.store.dispatch(new user.SignOutAction());
	}
}
