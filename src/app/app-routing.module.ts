import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";
import { HomeComponent } from "app/primary/home/home.component";
import { AuthGuard } from "app/core/services/auth-guard.service";

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'dashboard', canActivate: [AuthGuard], loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
	{ path: 'accounts', canActivate: [AuthGuard], loadChildren: 'app/modules/accounts/accounts.module#AccountsModule' },
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