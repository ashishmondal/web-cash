import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { IAccount, ITransaction, ICommodity } from 'app/core/models';
import * as root from 'app/core/reducers';

export const getAccountTransactions = createSelector(root.getTransactions, root.getSplits,
	(transactions, splits) => {
		const splitsArray = splits.toArray();
		let balance = 0;

		return transactions.toArray()
			.sort((ta, tb) => +(new Date(ta.post_date)) - +(new Date(tb.post_date)))
			.map(t => {
				const [thisSplit, ...otherSplits] = splitsArray.filter(s => s.tx_guid === t.guid);
				const amount = thisSplit ? thisSplit.value_num / thisSplit.value_denom : 0;
				balance += amount;
				return {
					date: new Date(t.post_date),
					num: t.num,
					description: t.description,
					transfer: 1,
					amount: amount,
					balance: balance
				}
			});
	});
