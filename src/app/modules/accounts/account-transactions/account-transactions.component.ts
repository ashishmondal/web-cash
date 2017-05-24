import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Transaction, AccountService } from "app/core/services/account.service";

@Component({
	selector: 'wc-account-transactions',
	templateUrl: './account-transactions.component.html',
	styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {
	accountName: string = "Account"
	transactions: Transaction[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private accountService: AccountService
	) { }

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.accountService.getTransactions(params['id']))
			.subscribe(txs => this.transactions = txs);
	}
}
