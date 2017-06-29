import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';

import { reducer } from 'app/core/reducers';

import { AppComponent } from './app.component';
import { PrimaryModule } from 'app/primary/primary.module';

describe('AppComponent', () => {
	const RouterMock = {};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				PrimaryModule,
				RouterTestingModule,
				StoreModule.provideStore(reducer)
			],
			declarations: [
				AppComponent
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

	it('should have not left menu', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('wc-side-nav')).toBeFalsy();
	}));

	it('should have workspace', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('wc-workspace')).toBeTruthy();
	}));
});
