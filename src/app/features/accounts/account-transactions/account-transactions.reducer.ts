import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { IAccount, ITransaction, ICommodity } from 'app/core/models';
import * as root from 'app/core/reducers';

export const getAccountTransactions = createSelector(root.getSelectedAccountId, root.getAccounts, root.getTransactions, root.getSplits,
	(accountId, accounts, transactions, splits) => {
		console.log(accountId);
		const splitsArray = splits.toArray();
		let balance = 0;

		return transactions.toArray()
			.sort((ta, tb) => +(new Date(ta.post_date)) - +(new Date(tb.post_date)))
			.map(t => {
				// const [thisSplit, ...otherSplits] = splitsArray.filter(s => s.tx_guid === t.guid);
				const txSplits = splitsArray.filter(s => s.tx_guid === t.guid);
				const thisSplit = txSplits.find(s => s.account_guid === accountId);
				const otherSplits = txSplits.filter(s => s.account_guid !== accountId);
				const amount = thisSplit ? thisSplit.value_num / thisSplit.value_denom : 0;
				balance += amount;

				return {
					date: new Date(t.post_date),
					num: t.num,
					description: t.description,
					transfer: otherSplits.length === 1 ? accounts.get(otherSplits[0].account_guid).name : '--Splits--',
					reconciled: thisSplit && thisSplit.reconcile_state,
					amount: amount,
					balance: balance
				}
			})
			.concat([{
				date: new Date(),
				num: '',
				description: '',
				transfer: '',
				reconciled: '',
				amount: 0,
				balance: balance
			}]);
	});
