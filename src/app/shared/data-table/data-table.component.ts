import { Component, ContentChildren, Input, QueryList, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { DataColumnComponent } from './data-column/data-column.component';

import { ITreeNode } from './tree-node';

@Component({
	selector: 'wc-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

	@Input() editable = false;
	@Input() treeView = false;

	@Input() set value(val: any[] | ITreeNode[]) {
		this._values = val || [];
		this._nodes =
			this.treeView ?
				this.getFlattenedTree(this._values) :
				(<any[]>this._values).map<ITreeNode>(v => ({ data: v, children: [] }));
	}

	@ContentChildren(DataColumnComponent) dataColumns: QueryList<DataColumnComponent>;

	selectedItem: any;

	private _nodes: ITreeNode[] = [];
	private _values = <any>[];

	public get nodes() {
		return this._nodes;
	}

	get gridTemplateColumns() {
		return this.dataColumns ? this.dataColumns.map(c => c.columnWidth).join(' ') : '1fr';
	};

	constructor() { }

	private getFlattenedTree(nodes?: ITreeNode[], level = 0): ITreeNode[] {
		return nodes ?
			nodes.map(node => { node.level = level; return node; })
				.map(node => !node.expanded ? [node] : [node, ...this.getFlattenedTree(node.children, level + 1)])
				.reduce((acc, val) => acc.concat(val), <ITreeNode[]>[])
			: [];
	}

	onNodeExpanderClicked(item: ITreeNode) {
		item.expanded = !item.expanded;
		this._nodes = this.getFlattenedTree(this._values);
	}

	onClick(item: any, column: DataColumnComponent) {
		this.selectedItem = item;
	}
}
