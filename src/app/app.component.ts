import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor() {
	}
}
