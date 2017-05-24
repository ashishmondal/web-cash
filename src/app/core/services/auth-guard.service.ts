import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.authService.isAuthenticated) {
			return true;
		}

		this.authService.redirectUrl = state.url;
		return this.authService.user
			.switchMap(u => {
				if (!u) {
					this.router.navigate(['']);
					return Observable.of(false);
				} else {
					return Observable.of(true);
				}
			});
	}
}