import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsSummaryComponent } from './accounts-summary.component';
import { TreeTableModule } from "primeng/primeng";
import { SharedModule } from "app/shared/shared.module";
import { AccountService } from "app/core/services/account.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs/Observable";

describe('AccountsSummaryComponent', () => {
	let component: AccountsSummaryComponent;
	let fixture: ComponentFixture<AccountsSummaryComponent>;
	const AccountServiceMock = {
		rootAccount: {
			subAccounts: []
		}
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				TreeTableModule,
				SharedModule
			],
			declarations: [AccountsSummaryComponent],
			providers: [
				{ provide: AccountService, useValue: AccountServiceMock }
			]
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
