import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { CommodityService, Commodity } from './commodity.service';
import { IDefferedService } from 'app/core/services/deffered.service';
import { IAccount, IAccountSummary, IBook, ICommodity } from '../models';

@Injectable()
export class AccountService {

	constructor(private dataService: DataService, private commodityService: CommodityService) {
	}

	public getBook() {
		return this.dataService.getData<IBook>('book');
	}

	public getAccounts() {
		return this.dataService.getData<IAccount[]>('accounts');
	}

	public getAccountSummary() {
		return this.dataService.getData<IAccountSummary[]>('accounts/summary');
	}

	public getCommodities() {
		return this.dataService.getData<ICommodity[]>('commodities');
	}


	public getTransactions(accountId: string) {
		return this.dataService.getData<ISplit[]>(`transactions/${accountId}`)
			.map(splits => splits.map(s => new Split(s)))
			.map(splits => splits.reduce((transactions, split) => {
				const transaction = transactions.find(t => t[0].split.tx_guid === split.split.tx_guid);
				if (transaction) {
					transaction.push(split);
				} else {
					transactions.push([split]);
				}
				return transactions;
			}, <Split[][]>[]))
			.map(sg => sg.reduce((transactions, splits) => {
				const lastBalance = transactions.length > 0 ? transactions[transactions.length - 1].balance : 0;
				transactions.push(new Transaction(splits, lastBalance));
				return transactions;
			}, <Transaction[]>[]));
	}
	// public static isNegativeBalanceAccountType(type: string) {
	// INCOME
	// ASSET
	// CREDIT
	// EXPENSE
	// BANK
	// LIABILITY
	// CASH
	// ROOT
	// EQUITY
	// 	return ['EQUITY', 'INCOME', 'LIABILITY', 'CREDIT'].indexOf(type) >= 0;
	// }
}


export interface IData {
	id: string;
}

export interface IAccountDeprecated extends IData {
	name: string;
	type: string;
	subAccounts: IAccountDeprecated[];
}

// export interface IAccountSummary extends IData {
// 	commodity_guid: string;
// 	parentId: string;
// 	name: string;
// 	account_type: string;
// 	description: string;
// 	total: number | null;
// }

// export class AccountSummary {
// 	commodity_guid: string;
// 	parentId: string;
// 	name: string;
// 	type: string;
// 	description: string;
// 	id: string;
// 	subAccounts: AccountSummary[];
// 	commodity: Commodity | null;

// 	get total(): number {
// 		let total = (this.summary.total || 0);
// 		total = AccountService.isNegativeBalanceAccountType(this.type) ? -total : total;
// 		return total + this.subAccounts.map(sa => sa.total)
// 			.reduce((previous, current) => previous + current, 0);
// 	}

// 	constructor(private commodityService: CommodityService, private summary: IAccountSummary, allAccounts: IAccountSummary[]) {
// 		this.name = summary.name;
// 		this.type = summary.account_type;
// 		this.description = summary.description;
// 		this.id = summary.id;
// 		this.commodity_guid = summary.commodity_guid;

// 		this.commodity = commodityService.commodities.find(c => c.id === this.commodity_guid);

// 		this.subAccounts = allAccounts
// 			.filter(a => a.parentId === this.id)
// 			.map(a => new AccountSummary(commodityService, a, allAccounts));
// 	}
// }

export interface ISplit {
	guid: string;
	reconcile_state: string;
	reconcile_date: string | null;
	amount: number;
	tx_guid: string;
	post_date: string;
	description: string;
}

export class Split {
	constructor(public split: ISplit) {

	}
}

export class Transaction {
	id: string;
	date: Date;
	number: number;
	description: string;
	reconciled: string;
	amount: number;
	balance: number;
	constructor(public splits: Split[], lastBalance: number) {
		const split = splits[0].split;
		this.id = split.tx_guid;
		this.date = new Date(split.post_date);
		this.description = split.description;
		this.reconciled = split.reconcile_state;
		this.amount = splits.map(s => s.split.amount)
			.reduce((previous, current) => previous + current, 0);
		this.balance = lastBalance + this.amount;
	}
}
