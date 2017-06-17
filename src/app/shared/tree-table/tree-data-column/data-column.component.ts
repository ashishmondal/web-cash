import { Component, OnInit, Input, HostBinding, TemplateRef, Optional, ContentChild } from '@angular/core';
import { TreeTableComponent } from "app/shared/tree-table/tree-table.component";

@Component({
	selector: 'wc-tree-data-column',
	templateUrl: './data-column.component.html',
	styleUrls: ['./data-column.component.scss']
})
export class TreeDataColumnComponent implements OnInit {
	@Input() field: string;
	@Input() header: string;
	@Input() columnWidth = '1fr';
	@Input() editable: boolean;
	@ContentChild(TemplateRef) template;

	constructor(dataTable: TreeTableComponent) {
		dataTable.addColumn(this);
	}

	ngOnInit() {
	}

}
