import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { reducer } from 'app/core/reducers';

import { AccountTransactionsComponent } from './account-transactions.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountService } from 'app/core/services/account.service';
import { Observable } from 'rxjs/Observable';

describe('AccountTransactionsComponent', () => {
	let component: AccountTransactionsComponent;
	let fixture: ComponentFixture<AccountTransactionsComponent>;
	const AccountServiceMock = {
		getTransactions: () => Observable.of([])
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				SharedModule,
				StoreModule.provideStore(reducer)
			],
			declarations: [AccountTransactionsComponent],
			providers: [
				{ provide: AccountService, useValue: AccountServiceMock }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountTransactionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
