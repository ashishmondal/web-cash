import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MdIconModule, MdButtonModule, MdProgressSpinnerModule, MdInputModule } from '@angular/material';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CurrencyComponent } from './currency/currency.component';
import { WaitMessageComponent } from './wait-message/wait-message.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataColumnComponent } from './data-table/data-column/data-column.component';

@NgModule({
	imports: [
		CommonModule, FormsModule,

		MdIconModule, MdButtonModule, MdProgressSpinnerModule, MdInputModule,

		PerfectScrollbarModule
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
