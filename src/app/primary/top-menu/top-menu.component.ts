import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MdDialog } from "@angular/material";
import { AuthService } from "app/core/services/auth.service";
import { WaitMessageComponent } from "app/shared/wait-message/wait-message.component";

@Component({
	selector: 'wc-top-menu',
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

	constructor(public authService: AuthService, private router: Router, private dialog: MdDialog) { }

	ngOnInit() {
	}

	login() {
		const dialogRef = this.dialog.open(WaitMessageComponent);
		this.authService.login()
			.subscribe(() => {
				this.router.navigate([this.authService.redirectUrl || '/dashboard'])
					.then(() => dialogRef.close());
			});
	}

	logout() {
		this.authService.logout();
		this.router.navigate(['']);
	}
}
