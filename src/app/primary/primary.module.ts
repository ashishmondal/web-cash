import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LogoComponent } from './logo/logo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from "@angular/router";
import { UserBadgeComponent } from './top-menu/user-badge/user-badge.component';
import { HomeComponent } from './home/home.component';
import { MdButtonModule, MdDialogModule, MdProgressBarModule } from '@angular/material';
import { SharedModule } from "app/shared/shared.module";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	imports: [
		// @angular
		RouterModule,
		CommonModule,

		// material
		MdDialogModule,
		MdButtonModule,
		MdProgressBarModule,

		// local
		SharedModule
	],
	declarations: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent, UserBadgeComponent, HomeComponent, HeaderComponent, SidebarComponent],
	exports: [LeftMenuComponent, HeaderComponent, WorkspaceComponent, HomeComponent, SidebarComponent]
})
export class PrimaryModule { }
