import { Component, Input } from '@angular/core';
import { Commodity } from "app/core/services/commodity.service";

@Component({
	selector: 'wc-currency',
	templateUrl: './currency.component.html',
	styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {

	@Input() amount: number;
	@Input() commodity: Commodity;

	constructor() { }

}
