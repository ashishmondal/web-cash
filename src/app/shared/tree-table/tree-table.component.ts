import { DataTableComponent } from '../data-table/data-table.component';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'wc-tree-table',
	templateUrl: './tree-table.component.html',
	styleUrls: ['./tree-table.component.scss']
})
export class TreeTableComponent extends DataTableComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() {
	}

}
