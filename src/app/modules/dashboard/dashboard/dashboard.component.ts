import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { TreeNode } from "primeng/components/common/api";
import { AccountService, IAccount } from "app/shared/account.service";

@Component({
	selector: 'wc-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
}


