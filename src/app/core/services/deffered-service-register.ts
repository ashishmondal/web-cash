import { Injectable } from "@angular/core";
import { IDefferedService } from "./deffered.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/merge';
import { AccountService } from "app/core/services/account.service";
import { CommodityService } from "app/core/services/commodity.service";

@Injectable()
export class DefferedServiceRegister {
	private managedServices: IDefferedService[] = [];
	private servicesReady = false;

	constructor(
		accountService: AccountService,
		commodityService: CommodityService) {
		this.managedServices.push(commodityService);
		this.managedServices.push(accountService);
	}

	public onReady() {
		return Observable.merge(...this.managedServices.map(s => s.ready$), 1).last();
	}
}
