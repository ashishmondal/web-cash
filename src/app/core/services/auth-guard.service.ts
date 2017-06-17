import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';
import * as fromRoot from '../reducers';
import * as user from '../reducers/user';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private store: Store<fromRoot.State>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return true;
	}
}
