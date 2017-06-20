import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TreeNode } from 'primeng/components/common/api';
import * as fromRoot from '../../../core/reducers';
import { getAccountSummary } from './reducer';
import * as accountSummary from '../../../core/actions/account-summary';
import { IAccount, IAccountSummary } from '../../../core/models';

@Component({
	selector: 'wc-accounts-summary',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './accounts-summary.component.html',
	styleUrls: ['./accounts-summary.component.scss']
})
export class AccountsSummaryComponent implements OnInit {
	accountTree$: Observable<any[]>;
	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.accountTree$ = store.select(getAccountSummary);
	}

	ngOnInit() {
		this.store.dispatch(new accountSummary.LoadAction())
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

export class AccountSummary {
	commodity_guid: string;
	parentId: string;
	name: string;
	type: string;
	description: string;
	id: string;
	subAccounts: AccountSummary[];

	get total(): number {
		let total = (this.summary.total || 0);
		// total = AccountService.isNegativeBalanceAccountType(this.type) ? -total : total;
		return total + this.subAccounts.map(sa => sa.total)
			.reduce((previous, current) => previous + current, 0);
	}

	constructor(private summary: ISummary, allAccounts: ISummary[]) {
		this.name = summary.name;
		this.type = summary.account_type;
		this.description = summary.description;
		this.id = summary.guid;
		this.commodity_guid = summary.commodity_guid;

		// this.commodity = commodityService.commodities.find(c => c.id === this.commodity_guid);

		this.subAccounts = allAccounts
			.filter(a => a.parent_guid === this.id)
			.map(a => new AccountSummary(a, allAccounts));
	}
}

type ISummary = IAccountSummary & IAccount;
