export interface ISplit {
	guid: string;
	tx_guid: string;
	account_guid: string;
	memo: string;
	action: string;
	reconcile_state: string;
	reconcile_date: Date;
	value_num: number;
	value_denom: number;
	quantity_num: number;
	quantity_denom: number;
	lot_guid: null | string;
}
