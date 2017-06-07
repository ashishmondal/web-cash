import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitMessageComponent } from './wait-message.component';
import { MdProgressSpinnerModule } from "@angular/material";

describe('WaitMessageComponent', () => {
	let component: WaitMessageComponent;
	let fixture: ComponentFixture<WaitMessageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MdProgressSpinnerModule
			],
			declarations: [WaitMessageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WaitMessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
