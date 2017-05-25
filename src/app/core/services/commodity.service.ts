
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import { IDefferedService } from "app/core/services/deffered.service";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class CommodityService implements IDefferedService {
	public ready$: Observable<any>;

	public get commodities(): Commodity[] {
		return this._commodities;
	}

	private _commodities: Commodity[];
	private commodityStream$: Observable<Commodity[]>;

	constructor(private dataService: DataService) {
		this.ready$ = this.dataService.getData<ICommodity[]>('commodities')
			.map(commodities => commodities.map(commodity => new Commodity(commodity)))
			.do(commodities => this._commodities = commodities)
			.publishLast()
			.refCount();
	}
}

export class Commodity {
	id: string;
	mnemonic: string;
	namespace: string;
	fullname: string;

	constructor(commodity: ICommodity) {
		this.id = commodity.guid;
		this.mnemonic = commodity.mnemonic;
	}
}

export interface ICommodity {
	guid: string;
	mnemonic: string;
}