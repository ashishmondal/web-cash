
import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishLast';

@Injectable()
export class CommodityService {
	private commodities: Commodity[] = [];
	private commodityStream$: Observable<Commodity[]>;

	constructor(private dataService: DataService) {
		this.commodityStream$ = this.dataService.getData<ICommodity[]>('commodities')
			.map(commodities => commodities.map(commodity => new Commodity(commodity)))
			.do(commodities => this.commodities = commodities)
			.publishLast()
			.refCount();
	}

	public getCommodity(id: string) {
		const commodity = this.commodities.find(c => c.id === id);

		if (commodity) {
			return Observable.of(commodity);
		} else {
			return this.commodityStream$
				.map(commodities => commodities.find(commodity => commodity.id === id));
		}
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