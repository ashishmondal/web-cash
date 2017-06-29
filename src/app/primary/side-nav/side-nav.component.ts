import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-side-nav',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

	@Input() menu: {
		name: string;
		menuItems: {
			icon: string;
			text: string;
			routerLink: string;
		}[];
	};

	constructor() { }

	ngOnInit() {
	}

}
