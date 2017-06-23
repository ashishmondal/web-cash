import { Component, Input } from '@angular/core';
import { ICommodity } from 'app/core/models';

@Component({
	selector: 'wc-currency',
	templateUrl: './currency.component.html',
	styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {

	@Input() amount: number;
	@Input() commodity: ICommodity;

	constructor() { }

}
