import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from 'app/core/reducers';
import { IUserInfo } from 'app/core/models';

@Component({
	selector: 'wc-home',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	user$: Observable<IUserInfo>;

	constructor(private store: Store<fromRoot.State>) {
		this.user$ = store.select(fromRoot.getUser);
	}

	ngOnInit() {
	}

}
