import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { PrimaryModule } from "app/primary/primary.module";
import { MenuService } from "app/core/services/menu.service";
import { AuthService } from "app/core/services/auth.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
	const MenuServiceMock = { menu: [] };
	const AuthServiceMock = {};
	const RouterMock = {};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				PrimaryModule,
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
			providers: [
				{
					provide: MenuService,
					useValue: MenuServiceMock
				},
				{
					provide: AuthService,
					useValue: AuthServiceMock
				}
			]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should have header', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('wc-header')).toBeTruthy();
	}));

	it('should have left menu', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('wc-left-menu')).toBeTruthy();
	}));

	it('should have workspace', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('wc-workspace')).toBeTruthy();
	}));
});
