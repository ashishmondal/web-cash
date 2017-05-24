import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router) { }

	canActivate() {
		// If the user is not logged in we'll send them back to the home page
		// if (!this.auth.authenticated) {
		// 	this.router.navigate(['login']);
		// 	return false;
		// }
		return true;
	}

}