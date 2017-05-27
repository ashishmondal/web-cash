import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from "rxjs/Observable";
import { DefferedServiceRegister } from "app/core/services/deffered-service-register";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private dsRegister: DefferedServiceRegister, private authService: AuthService, private router: Router) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const dsRegister$ = this.dsRegister.onReady()
				.map(() => true)
				.catch(e => {
					console.log("services error: %o", e);
					return Observable.of(false);
				});

		if (this.authService.isAuthenticated) {
			return dsRegister$;
		}

		this.authService.redirectUrl = state.url;
		return this.authService.user$
			.switchMap(user => {
				if (!user) {
					this.router.navigate(['']);
					return Observable.of(false);
				} else {
					return dsRegister$;
				}
			});
	}
}