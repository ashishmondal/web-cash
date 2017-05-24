import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CurrencyComponent } from "./currency/currency.component";
import { WaitMessageComponent } from './wait-message/wait-message.component';
import { MdProgressSpinnerModule } from '@angular/material';

@NgModule({
	imports: [
		NgCommonModule,
		MdProgressSpinnerModule
	],
	declarations: [
		CurrencyComponent,
		WaitMessageComponent
	],
	exports: [
		CurrencyComponent,
		WaitMessageComponent
	],
	entryComponents: [
		WaitMessageComponent
	]
})
export class SharedModule { }
