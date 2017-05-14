import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TreeNode } from "primeng/components/common/api";
import { AccountService, IAccount } from "app/shared/account.service";

@Component({
	selector: 'wc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	accounts;
	tree: TreeNode[];
	constructor(private accountService: AccountService) { }

	ngOnInit() {
		this.accountService.getAccountSummary()
			.subscribe(a => {
				this.accounts = a;
				this.tree = a.subAccounts
					.sort((a, b) => a.name.localeCompare(b.name))
					.map(sa => this.getDataTree(sa));
			});
	}

	getDataTree(account: IAccount): TreeNode {
		return {
			data: account,
			children: account.subAccounts
				.sort((a, b) => a.name.localeCompare(b.name))
				.map(sa => this.getDataTree(sa))
		}
	}
}


