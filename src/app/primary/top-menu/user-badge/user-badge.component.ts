import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IUserInfo } from 'app/core/models/user-info';

@Component({
	selector: 'wc-user-badge',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-badge.component.html',
	styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

	@Input() user: IUserInfo;

	constructor() { }

	ngOnInit() {
	}

}
