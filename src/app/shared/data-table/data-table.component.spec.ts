import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdIconModule } from '@angular/material';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
	let component: DataTableComponent;
	let fixture: ComponentFixture<DataTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MdIconModule,
				PerfectScrollbarModule
			],
			declarations: [DataTableComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
