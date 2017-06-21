export interface ICommodity {
	guid: string;
	namespace: string;
	mnemonic: string;
	fullname: null | string;
	cusip: null | string;
	fraction: number;
	quote_flag: number;
	quote_source: null | string;
	quote_tz: null | string;
}
