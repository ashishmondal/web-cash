import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LogoComponent } from './logo/logo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from "@angular/router";
import { UserBadgeComponent } from './top-menu/user-badge/user-badge.component';
import { HomeComponent } from './home/home.component';
import { MdButtonModule, MdDialogModule } from '@angular/material';
import { SharedModule } from "app/shared/shared.module";
import { HeaderComponent } from './header/header.component';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		MdDialogModule,
		MdButtonModule,
		SharedModule
	],
	declarations: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent, UserBadgeComponent, HomeComponent, HeaderComponent],
	exports: [LeftMenuComponent, HeaderComponent, WorkspaceComponent, HomeComponent]
})
export class PrimaryModule { }
