import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'firebase/app';

@Component({
	selector: 'wc-user-badge',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './user-badge.component.html',
	styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

	@Input() user: User;

	constructor() { }

	ngOnInit() {
	}

}
