import { NgModule, ModuleWithProviders, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieModule } from "app/shared/viz/pie/pie.module";

@NgModule({
	imports: [
		CommonModule
	],

	declarations: []
})
export class VizModule {
	private static chartsLoaded = false;

	constructor() {
		if (!VizModule.chartsLoaded) {
			google.charts.load('current', { 'packages': ['corechart'] });
			VizModule.chartsLoaded = true;
		}
	}
}
