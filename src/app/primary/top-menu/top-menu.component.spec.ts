import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';
import { UserBadgeComponent } from 'app/primary/top-menu/user-badge/user-badge.component';
import { MdProgressBarModule, MdDialogModule, MdButtonModule, MdIconModule, MdMenuModule } from '@angular/material';
import { AuthService } from 'app/core/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopMenuComponent', () => {
	let component: TopMenuComponent;
	let fixture: ComponentFixture<TopMenuComponent>;
	const AuthServiceMock = {};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				MdDialogModule,
				MdButtonModule,
				MdProgressBarModule,
				MdIconModule,
				MdMenuModule
			],
			declarations: [TopMenuComponent, UserBadgeComponent],
			providers: [{ provide: AuthService, useValue: AuthServiceMock }]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TopMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
