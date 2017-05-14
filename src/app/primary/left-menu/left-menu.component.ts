import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'wc-left-menu',
	templateUrl: './left-menu.component.html',
	styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

	menuItems = [
		{ text: 'Dashboard', icon: 'home' },
		{ text: 'Bank', icon: 'bank' }
	];

	constructor() { }

	ngOnInit() {
	}

}
