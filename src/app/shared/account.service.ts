import { Injectable } from "@angular/core";
import { DataService } from "app/shared/data.service";
import { Observable } from "rxjs/Observable";
import { CommodityService, Commodity } from "app/shared/commodity.service";

@Injectable()
export class AccountService {

	constructor(private dataService: DataService, private commodityService: CommodityService) {

	}

	public getAccounts(): Observable<IAccount> {
		return this.dataService.getData<IAccount>('accounts');
	}

	public getAccountSummary(): Observable<AccountSummary> {
		return this.dataService.getData<IAccountSummary[]>('accounts/summary')
			.map(accounts => new AccountSummary(this.commodityService, accounts.find(a => a.parentId === null), accounts));
	}

	public static isNegativeBalanceAccountType(type: string) {
		// INCOME
		// ASSET
		// CREDIT
		// EXPENSE
		// BANK
		// LIABILITY
		// CASH
		// ROOT
		// EQUITY
		return ['EQUITY', 'INCOME', 'LIABILITY', 'CREDIT'].indexOf(type) >= 0;
	}
}


export interface IData {
	id: string;
}

export interface IAccount extends IData {
	name: string;
	type: string;
	subAccounts: IAccount[];
}

export interface IAccountSummary extends IData {
	commodity_guid: string;
	parentId: string;
	name: string;
	account_type: string;
	description: string;
	total: number | null;
}

export class AccountSummary {
	commodity_guid: string;
	parentId: string;
	name: string;
	type: string;
	description: string;
	id: string;
	subAccounts: AccountSummary[];
	commodity: Commodity | null;

	get total(): number {
		let total = (this.summary.total || 0);
		total = AccountService.isNegativeBalanceAccountType(this.type) ? -total : total;
		return total + this.subAccounts.map(sa => sa.total)
			.reduce((previous, current) => previous + current, 0);
	}

	constructor(private commodityService: CommodityService, private summary: IAccountSummary, allAccounts: IAccountSummary[]) {
		this.name = summary.name;
		this.type = summary.account_type;
		this.description = summary.description;
		this.id = summary.id;
		this.commodity_guid = summary.commodity_guid;

		if (this.commodity_guid) {
			commodityService.getCommodity(this.commodity_guid)
				.subscribe(c => {
					this.commodity = c;
				});
		}

		this.subAccounts = allAccounts
			.filter(a => a.parentId === this.id)
			.map(a => new AccountSummary(commodityService, a, allAccounts));
	}
}
