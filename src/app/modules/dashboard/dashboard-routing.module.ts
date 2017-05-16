import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "app/modules/dashboard/dashboard/dashboard.component";
import { NgModule } from "@angular/core";

const dashboardRoutes: Routes = [{
	path: '',
	component: DashboardComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(dashboardRoutes)
	],
	exports: [
		RouterModule
	]
})
export class DashboardRoutingModule { }