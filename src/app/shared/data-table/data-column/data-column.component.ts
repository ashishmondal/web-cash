import { Component, OnInit, Input, HostBinding, TemplateRef, Optional, ContentChild } from '@angular/core';
import { DataTableComponent } from 'app/shared/data-table/data-table.component';

@Component({
	selector: 'wc-data-column',
	template: ' '
})
export class DataColumnComponent implements OnInit {
	@Input() field: string;
	@Input() header: string;
	@Input() columnWidth = '1fr';
	@Input() editable = false;
	@Input() headerStyle: { [key: string]: string };

	@ContentChild(TemplateRef) template: TemplateRef<any>;

	constructor() {
	}

	ngOnInit() {
	}

}
