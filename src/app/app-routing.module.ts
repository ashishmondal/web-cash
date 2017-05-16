import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

const appRoutes: Routes = [
	{ path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
	{ path: 'accounts', loadChildren: 'app/modules/accounts/accounts.module#AccountsModule' },
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }