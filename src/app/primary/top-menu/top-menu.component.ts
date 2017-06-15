import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IUserInfo } from 'app/core/models/user-info';

@Component({
	selector: 'wc-top-menu',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './top-menu.component.html',
	styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
	@Input() user: IUserInfo;

	@Output() onSignIn = new EventEmitter();
	@Output() onSignOut = new EventEmitter();

	constructor() { }

	ngOnInit() {
		
	}

	// login() {
	// 	const dialogRef = this.dialog.open(WaitMessageComponent);
	// 	this.authService.login()
	// 		.subscribe(() => {
	// 			this.router.navigate([this.authService.redirectUrl || '/dashboard'])
	// 				.then(() => dialogRef.close());
	// 		});
	// }

	// logout() {
	// 	this.authService.logout();
	// 	this.router.navigate(['']);
	// }
}
