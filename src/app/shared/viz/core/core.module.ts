import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: []
})
export class CoreModule {
	private static chartsLoaded = false;

	constructor() {
		if (!CoreModule.chartsLoaded) {
			google.charts.load('current', { 'packages': ['corechart'] });
			CoreModule.chartsLoaded = true;
		}
	}
}
