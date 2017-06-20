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

	get nodes() {
		const n = this.treeView ? this.getFlattenedTree() : (<any[]>this.value).map<ITreeNode>(v => ({ data: v, children: [] }));
		return n;
	}

	get gridTemplateColumns() {
		return this.dataColumns ? this.dataColumns.map(c => c.columnWidth).join(' ') : '1fr';
	};

	constructor() { }

	private getFlattenedTree(nodes: ITreeNode[] = this.value, level = 0) {
		return nodes &&
			nodes
				.map(node => { node.level = level; return node; })
				.map(node => !node.expanded ? [node] : [node, ...this.getFlattenedTree(node.children, level + 1)])
				.reduce((acc, val) => acc.concat(val), <ITreeNode[]>[]);
	}
}
