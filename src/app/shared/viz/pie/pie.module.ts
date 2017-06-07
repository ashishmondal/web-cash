import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { CoreModule } from "app/shared/viz/core/core.module";


@NgModule({
	imports: [
		CommonModule,
		CoreModule
	],
	declarations: [PieComponent],
	exports: [PieComponent]
})
export class PieModule { }
