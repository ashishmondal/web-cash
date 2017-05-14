import { Component, OnInit } from '@angular/core';
import { DataService, IAccount } from "../../shared/data.service";

@Component({
	selector: 'wc-workspace',
	templateUrl: './workspace.component.html',
	styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
}
