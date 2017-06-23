import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';

import * as fromRoot from '../../../core/reducers';
import * as fromAccount from 'app/core/actions/account';
import { ITransaction } from 'app/core/models';
import { getAccountTransactions } from './account-transactions.reducer';

@Component({
	selector: 'wc-account-transactions',
	templateUrl: './account-transactions.component.html',
	styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {

	transactions$: Observable<any>;

	constructor(
		private store: Store<fromRoot.State>,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.transactions$ = store.select(getAccountTransactions);
	}

	ngOnInit() {
		this.route.params
			.subscribe((params: Params) => {
				this.store.dispatch(new fromAccount.LoadTransactionsAction(params['id']));
			});
	}
}
