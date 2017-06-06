import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieModule } from "app/shared/viz/pie/pie.module";

@NgModule({
	imports: [
		CommonModule
	],

	declarations: []
})
export class VizModule {
	static forRoot(): ModuleWithProviders {
		google.charts.load('current', { 'packages': ['corechart'] });

		return {
			ngModule: VizModule,
			providers: []
		}
	}
}
