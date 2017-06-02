import { Component, OnInit, Input, HostBinding, TemplateRef, Optional, ContentChild } from '@angular/core';
import { DataTableComponent } from "app/shared/data-table/data-table.component";

@Component({
	selector: 'wc-data-column',
	templateUrl: './data-column.component.html',
	styleUrls: ['./data-column.component.scss']
})
export class DataColumnComponent implements OnInit {
	@Input() field: string;
	@Input() header: string;
	@Input() columnWidth: string = '1fr';
	@Input() editable: boolean;
	@ContentChild(TemplateRef) template;

	constructor(dataTable: DataTableComponent) {
		dataTable.addColumn(this);
	}

	ngOnInit() {
	}

}
