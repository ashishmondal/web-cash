export interface ITransaction {
	guid: string;
	currency_guid: string;
	num: string;
	post_date: Date;
	enter_date: Date;
	description: null | string;
}
