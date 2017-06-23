import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as fromRoot from '../../../core/reducers';
import { getAccountSummary } from './account-summary.reducer';
import * as accountSummary from '../../../core/actions/account-summary';
import { IAccount, IAccountSummary } from '../../../core/models';

@Component({
	selector: 'wc-accounts-summary',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './accounts-summary.component.html',
	styleUrls: ['./accounts-summary.component.scss']
})
export class AccountsSummaryComponent implements OnInit {
	accountTree$: Observable<any[]>;
	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.accountTree$ = store.select(getAccountSummary);
	}

	ngOnInit() {
		this.store.dispatch(new accountSummary.LoadAction())
	}
}
