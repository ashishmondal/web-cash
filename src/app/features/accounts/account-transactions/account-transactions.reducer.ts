import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { IAccount, ITransaction, ICommodity } from 'app/core/models';
import * as root from 'app/core/reducers';

export const getAccountTransactions = createSelector(root.getTransactions, transactions => {
	return transactions.toArray()
		.map(t => ({
			date: new Date(t.post_date),
			num: t.num,
			description: t.description
		}))
		.sort((ta, tb) => +ta.date - +tb.date);
});
