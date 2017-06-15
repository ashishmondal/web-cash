import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TreeNode } from 'primeng/components/common/api';
import { AccountService, IAccount } from '../../../core/services/account.service';
import { Router } from '@angular/router';

@Component({
	selector: 'wc-accounts-summary',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './accounts-summary.component.html',
	styleUrls: ['./accounts-summary.component.scss']
})
export class AccountsSummaryComponent implements OnInit {
	accounts;
	tree: TreeNode[];
	constructor(private accountService: AccountService,
		private router: Router) { }

	ngOnInit() {
		this.tree = this.accountService.rootAccount.subAccounts
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(sa => this.getDataTree(sa));
	}

	getDataTree(account: IAccount): TreeNode {
		return {
			data: account,
			children: account.subAccounts
				.sort((a, b) => a.name.localeCompare(b.name))
				.map(sa => this.getDataTree(sa))
		}
	}

	onAccountSelected(event) {
		const account = event.node.data as IAccount;
		this.router.navigate(['/accounts', account.id]);
	}
}
