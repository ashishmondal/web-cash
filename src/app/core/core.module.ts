import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from "app/core/services/menu.service";
import { Title } from "@angular/platform-browser";
import { AuthService } from "app/core/services/auth.service";
import { AuthGuard } from "app/core/services/auth-guard.service";
import { AngularFireAuth } from "angularfire2/auth";
import { DataService } from "app/core/services/data.service";
import { CommodityService } from "app/core/services/commodity.service";
import { AccountService } from "app/core/services/account.service";

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	providers: [MenuService, Title, AuthService, AuthGuard, AngularFireAuth, DataService, CommodityService, AccountService]

})
export class CoreModule { }
