import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../reducers';
import * as user from '../reducers/user';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/Observable/of';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private store: Store<fromRoot.State>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.store.select(fromRoot.getUserAuthState)
			.take(1)
			.switchMap(authState => {
				switch (authState) {
					case user.AuthState.SignedIn: return Observable.of(true);
					case user.AuthState.SigningIn:
						return this.store.select(fromRoot.getUserAuthState)
							.filter(s => s !== user.AuthState.SigningIn)
							.take(1)
							.map(s => s === user.AuthState.SignedIn);
					default: return Observable.of(false);
				}
			});
	}
}
