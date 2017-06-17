import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TreeNode } from 'primeng/components/common/api';
import * as fromRoot from '../../../core/reducers';
import * as book from '../../../core/actions/book';
import { IAccount } from '../../../core/models';

@Component({
	selector: 'wc-accounts-summary',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './accounts-summary.component.html',
	styleUrls: ['./accounts-summary.component.scss']
})
export class AccountsSummaryComponent implements OnInit {
	accountTree$: Observable<TreeNode[]>;
	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.accountTree$ = store.select(fromRoot.getAccounts)
			.map(accounts => {
				const tree = this.getDataTree(null, accounts);
				return tree.length > 0 ? tree[0].children : tree;
			});
	}

	ngOnInit() {
		this.store.dispatch(new book.LoadAction())
	}

	getDataTree(account: null | IAccount, allAccounts: IAccount[]): TreeNode[] {
		return allAccounts
			.filter(a => {

				return a.parent_guid === (account === null ? null : account.guid);
			})
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(a => ({
				data: a,
				children: this.getDataTree(a, allAccounts),
				toString: () => a.name
			}));
	}

	onAccountSelected(event) {
		const account = event.node.data as IAccount;
		this.router.navigate(['/accounts', account.guid]);
	}
}
