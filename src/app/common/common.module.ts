import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CurrencyComponent } from "app/common/currency/currency.component";

@NgModule({
	imports: [
		NgCommonModule
	],
	declarations: [
		CurrencyComponent
		],
	exports: [
		CurrencyComponent
		]
})
export class CommonModule { }
