import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CurrencyComponent } from "./currency/currency.component";
import { WaitMessageComponent } from './wait-message/wait-message.component';
import { MdProgressSpinnerModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { DataColumnComponent } from './data-table/data-column/data-column.component';

@NgModule({
	imports: [
		NgCommonModule,
		MdProgressSpinnerModule
	],
	declarations: [
		CurrencyComponent,
		WaitMessageComponent,
		DataTableComponent,
		DataColumnComponent
	],
	exports: [
		CurrencyComponent,
		WaitMessageComponent,
		DataTableComponent,
		DataColumnComponent
	],
	entryComponents: [
		WaitMessageComponent
	]
})
export class SharedModule { }
