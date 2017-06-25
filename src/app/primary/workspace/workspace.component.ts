import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'wc-workspace',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
}
