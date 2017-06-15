import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IUserInfo } from 'app/core/models/user-info';

@Component({
	selector: 'wc-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Input() user: IUserInfo;

	@Output() onSignIn = new EventEmitter();
	@Output() onSignOut = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

}
