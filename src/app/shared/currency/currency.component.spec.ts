import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';
import { Commodity } from "app/core/services/commodity.service";

describe('CurrencyComponent', () => {
	let component: CurrencyComponent;
	let fixture: ComponentFixture<CurrencyComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CurrencyComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CurrencyComponent);
		component = fixture.componentInstance;
		component.amount = 100;
		component.commodity = new Commodity({
			guid: '',
			mnemonic: 'INR'
		});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
