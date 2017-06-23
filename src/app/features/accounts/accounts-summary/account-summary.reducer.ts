import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { IAccount, IAccountSummary, ICommodity } from 'app/core/models';
import * as root from 'app/core/reducers';

type Account = IAccount & IAccountSummary;

export class AccountSummary {
	public children: AccountSummary[];
	public commodity: ICommodity;
	public get total() {
		return this.children.reduce((acc, val) => acc + val.total, +this.data.total);
	}

	constructor(public data: Account, allAccounts: Account[], allCommodities: Map<string, ICommodity>) {
		this.commodity = data.commodity_guid ? allCommodities.get(data.commodity_guid) : null;
		this.children = allAccounts.filter(a => a.parent_guid === data.guid)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(a => new AccountSummary(a, allAccounts, allCommodities));
	}
}

export const getAccountSummary = createSelector(
	root.getBook,
	root.getAccounts,
	root.getAccountSummaryEntities,
	root.getCommodities,
	(book, accountsEntities, summaries, commodities) => {
		if (!book) {
			return [];
		}
		const accounts = summaries.map(s => Object.assign({}, s, accountsEntities.get(s.guid)));
		const root = accounts.find(a => a.guid === book.root_account_guid);
		return new AccountSummary(root, accounts, commodities).children;
	});
