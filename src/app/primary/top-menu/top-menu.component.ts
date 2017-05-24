import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: 'wc-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

	constructor(public authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	login() {
		this.authService.login()
			.subscribe(() => this.router.navigate([this.authService.redirectUrl || '/dashboard']));
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['']);
	}
}
