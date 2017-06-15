import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AuthService } from '../../core/services/auth.service';
import { WaitMessageComponent } from '../../shared/wait-message/wait-message.component';

@Component({
	selector: 'wc-top-menu',
	changeDetection: ChangeDetectionStrategy.OnPush,
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
