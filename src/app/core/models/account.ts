export interface IAccount {
	guid: string;
	name: string;
	account_type: string;
	commodity_guid: string;
	commodity_scu: number;
	non_std_scu: number;
	parent_guid: string;
	code: null | string;
	description: null | string;
}
