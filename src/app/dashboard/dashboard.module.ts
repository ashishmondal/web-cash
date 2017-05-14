import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeTableModule } from 'primeng/components/treetable/treetable';
import { CommonModule } from "app/common/common.module";

@NgModule({
	imports: [
		NgCommonModule,
		CommonModule,
		TreeTableModule
	],
	declarations: [DashboardComponent],
	exports: [DashboardComponent]
})
export class DashboardModule { }
