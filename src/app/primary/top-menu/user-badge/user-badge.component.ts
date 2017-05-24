import { Component, OnInit, Input } from '@angular/core';
import { User } from 'firebase/app';

@Component({
	selector: 'wc-user-badge',
	templateUrl: './user-badge.component.html',
	styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent implements OnInit {

	@Input() user: User;

	constructor() { }

	ngOnInit() {
	}

}
