import { Component } from '@angular/core';
import { DataService } from "./shared/data.service";
import { AccountService } from "app/shared/account.service";
import { CommodityService } from "app/shared/commodity.service";
import { AuthService } from "app/core/auth.service";

@Component({
	selector: 'wc-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [DataService, CommodityService, AccountService]
})
export class AppComponent {
	constructor(public authService: AuthService) {

	}
}
