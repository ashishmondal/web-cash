import { Component, OnInit, DoCheck, Input, HostBinding } from '@angular/core';
import { DataColumnComponent } from "./data-column/data-column.component";

@Component({
	selector: 'wc-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

	@Input() value: any[];

	public columns: DataColumnComponent[] = [];

	get gridTemplateColumns() {
		return this.columns.map(c => c.columnWidth).join(' ');
	};

	constructor() { }

	ngOnInit() {
	}

	public addColumn(column: DataColumnComponent) {
		this.columns.push(column);
	}
}
