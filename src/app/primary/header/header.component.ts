import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
