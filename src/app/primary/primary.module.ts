import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LogoComponent } from './logo/logo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { DashboardModule } from "../dashboard/dashboard.module";
import { RouterModule } from "@angular/router";

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		DashboardModule
	],
	declarations: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent],
	exports: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent]
})
export class PrimaryModule { }
