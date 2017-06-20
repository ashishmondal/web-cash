import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { DataColumnComponent } from './data-column/data-column.component';

import { ITreeNode } from './tree-node';

@Component({
	selector: 'wc-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

	@Input() treeView = false;
	@Input() value: any[] | ITreeNode[];

	@ContentChildren(DataColumnComponent) dataColumns: QueryList<DataColumnComponent>;

	get data() {
		return this.treeView ? this.getFlattenedTree() : this.value;
	}

	get gridTemplateColumns() {
		return this.dataColumns ? this.dataColumns.map(c => c.columnWidth).join(' ') : '1fr';
	};

	constructor() { }

	private getFlattenedTree(nodes: ITreeNode[] = this.value) {
		return nodes &&
			nodes.map(v => [v.data, ...this.getFlattenedTree(v.children)])
				.reduce((acc, val) => acc.concat(val), []);
	}
}
