import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LogoComponent } from './logo/logo.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { RouterModule } from "@angular/router";
import { UserBadgeComponent } from './top-menu/user-badge/user-badge.component';
import { HomeComponent } from './home/home.component';
import { MdButtonModule } from '@angular/material';

@NgModule({
	imports: [
		RouterModule,
		CommonModule,
		MdButtonModule
	],
	declarations: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent, UserBadgeComponent, HomeComponent],
	exports: [LeftMenuComponent, TopMenuComponent, LogoComponent, WorkspaceComponent, HomeComponent]
})
export class PrimaryModule { }
