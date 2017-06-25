import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from 'app/primary/logo/logo.component';
import { TopMenuComponent } from 'app/primary/top-menu/top-menu.component';
import { UserBadgeComponent } from 'app/primary/top-menu/user-badge/user-badge.component';
import { MdProgressBarModule, MdDialogModule, MdButtonModule, MdIconModule, MdMenuModule } from '@angular/material';
import { AuthService } from 'app/core/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
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
			declarations: [HeaderComponent, LogoComponent, TopMenuComponent, UserBadgeComponent],
			providers: [{ provide: AuthService, useValue: AuthServiceMock }]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
