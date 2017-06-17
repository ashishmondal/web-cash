import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'wc-tree-table-row',
	templateUrl: './tree-table-row.component.html',
	styleUrls: ['./tree-table-row.component.scss']
})
export class TreeTableRowComponent implements OnInit {

	@Input() columns: any[];
	@Input() item: any;

	@Input() gridTemplateColumns = '';

	@Input() @HostBinding('style.padding-left') indent = 0;

	constructor() { }

	ngOnInit() {
	}

}
