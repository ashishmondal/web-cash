import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuComponent } from './left-menu.component';
import { RouterTestingModule } from "@angular/router/testing";
import { MenuService } from "app/core/services/menu.service";

describe('LeftMenuComponent', () => {
	let component: LeftMenuComponent;
	let fixture: ComponentFixture<LeftMenuComponent>;
	const MenuServiceMock = { menu: [] };

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [LeftMenuComponent],
			providers: [{ provide: MenuService, useValue: MenuServiceMock }]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LeftMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
