export interface IPrice {
	guid: string;
	commodity_guid: string;
	currency_guid: string;
	date: Date;
	source: null | string;
	type: null | string;
	value_num: number;
	value_denom: number;
}