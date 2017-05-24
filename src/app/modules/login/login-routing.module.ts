import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "app/modules/login/login.component";
import { NgModule } from "@angular/core";

const loginRoutes: Routes = [
	{ path: '', component: LoginComponent },
	//{ path: 'callback', component: CallbackComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(loginRoutes)
	],
	exports: [
		RouterModule
	]
})
export class LoginRoutingModule { }