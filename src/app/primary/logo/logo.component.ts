import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-logo',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
