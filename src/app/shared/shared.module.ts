import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';
import { WaitMessageComponent } from './wait-message/wait-message.component';
import { MdProgressSpinnerModule } from '@angular/material';
import { DataTableComponent } from './data-table/data-table.component';
import { DataColumnComponent } from './data-table/data-column/data-column.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreeDataColumnComponent } from 'app/shared/tree-table/tree-data-column/data-column.component';
import { TreeTableRowComponent } from './tree-table/tree-table-row/tree-table-row.component';

@NgModule({
	imports: [
		NgCommonModule,
		MdProgressSpinnerModule
	],
	declarations: [
		CurrencyComponent,
		WaitMessageComponent,
		DataTableComponent,
		DataColumnComponent,
		TreeTableComponent,
		TreeDataColumnComponent,
		TreeTableRowComponent
	],
	exports: [
		CurrencyComponent,
		WaitMessageComponent,
		DataTableComponent,
		DataColumnComponent,
		TreeTableComponent,
		TreeDataColumnComponent
	],
	entryComponents: [
		WaitMessageComponent
	]
})
export class SharedModule { }
