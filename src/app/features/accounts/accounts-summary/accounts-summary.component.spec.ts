import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdButtonModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { reducer } from 'app/core/reducers';

import { AccountsSummaryComponent } from './accounts-summary.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountService } from 'app/core/services/account.service';
import { Observable } from 'rxjs/Observable';

describe('AccountsSummaryComponent', () => {
	let component: AccountsSummaryComponent;
	let fixture: ComponentFixture<AccountsSummaryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				SharedModule,
				MdButtonModule,
				StoreModule.provideStore(reducer)
			],
			declarations: [AccountsSummaryComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AccountsSummaryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
