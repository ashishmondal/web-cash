import { createSelector } from 'reselect';
import { IAccount, IAccountSummary } from 'app/core/models';
import * as root from 'app/core/reducers';

type Account = IAccount & IAccountSummary;

export class AccountSummary {
	children: AccountSummary[];

	constructor(public data: Account, allAccounts: Account[]) {
		this.children = allAccounts.filter(a => a.parent_guid === data.guid)
			.sort((a, b) => a.name.localeCompare(b.name))
			.map(a => new AccountSummary(a, allAccounts));
	}
}

export const getAccountSummary = createSelector(
	root.getBook,
	root.getAccountEntities,
	root.getAccountSummaryEntities,
	(book, accountsEntities, summaries) => {
		if (!book) {
			return [];
		}
		const accounts = summaries.map(s => Object.assign({}, s, accountsEntities[s.guid]));
		const root = accounts.find(a => a.guid === book.root_account_guid);
		return new AccountSummary(root, accounts).children;
	});
