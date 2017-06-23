import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/switchMap';

import * as fromRoot from '../../../core/reducers';
import * as fromAccount from 'app/core/actions/account';

@Component({
	selector: 'wc-account-transactions',
	templateUrl: './account-transactions.component.html',
	styleUrls: ['./account-transactions.component.scss']
})
export class AccountTransactionsComponent implements OnInit {
	constructor(
		private store: Store<fromRoot.State>,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.route.params
			.subscribe((params: Params) => this.store.dispatch(new fromAccount.LoadTransactionsAction(params['id'])));
	}
}
