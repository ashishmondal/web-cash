import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard/dashboard.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

const appRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	// { path: 'accounts/:id', component: HeroDetailComponent },
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }