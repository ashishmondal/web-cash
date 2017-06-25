import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponent } from './currency.component';

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
		component.commodity = {
			'guid': '7ad051989f2922097958bbe353c29793',
			'namespace': 'CURRENCY',
			'mnemonic': 'INR',
			'fullname': 'Indian Rupee',
			'cusip': '356',
			'fraction': 100,
			'quote_flag': 1,
			'quote_source': 'currency',
			'quote_tz': null
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
