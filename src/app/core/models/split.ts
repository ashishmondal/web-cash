export interface ISplit {
	guid: string;
	tx_guid: string;
	account_guid: string;
	memo: string;
	action: string;
	reconcile_state: string;
	reconcile_date: Date;
	value_num: string;
	value_denom: string;
	quantity_num: string;
	quantity_denom: string;
	lot_guid: null | string;
}