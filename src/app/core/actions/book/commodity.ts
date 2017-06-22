import { Action } from '@ngrx/store';
import { ICommodity } from 'app/core/models';


export const LOAD_COMMODITIES = '[Book] Load Commodities';
export const LOAD_COMMODITIES_SUCCESS = '[Book] Load Commodities Success';
export const LOAD_COMMODITIES_FAIL = '[Book] Load Commodities Fail';
export const ADD_COMMODITY = '[Book] Add Commodity';
export const ADD_COMMODITY_SUCCESS = '[Book] Add Commodity Success';
export const ADD_COMMODITY_FAIL = '[Book] Add Commodity Fail';
export const REMOVE_COMMODITY = '[Book] Remove Commodity';
export const REMOVE_COMMODITY_SUCCESS = '[Book] Remove Commodity Success';
export const REMOVE_COMMODITY_FAIL = '[Book] Remove Commodity Fail';

export class LoadCommoditiesAction implements Action {
	readonly type = LOAD_COMMODITIES;
}

export class LoadCommoditiesSuccessAction implements Action {
	readonly type = LOAD_COMMODITIES_SUCCESS;

	constructor(public payload: ICommodity[]) { }
}

export class LoadCommoditiesFailAction implements Action {
	readonly type = LOAD_COMMODITIES_FAIL;

	constructor(public payload: any) { }
}

export class AddCommodityAction implements Action {
	readonly type = ADD_COMMODITY;

	constructor(public payload: ICommodity) { }
}

export class AddCommoditySuccessAction implements Action {
	readonly type = ADD_COMMODITY_SUCCESS;

	constructor(public payload: ICommodity) { }
}

export class AddCommodityFailAction implements Action {
	readonly type = ADD_COMMODITY_FAIL;

	constructor(public payload: ICommodity) { }
}


/**
 * Remove Commodity from Book Actions
 */
export class RemoveCommodityAction implements Action {
	readonly type = REMOVE_COMMODITY;

	constructor(public payload: ICommodity) { }
}

export class RemoveCommoditySuccessAction implements Action {
	readonly type = REMOVE_COMMODITY_SUCCESS;

	constructor(public payload: ICommodity) { }
}

export class RemoveCommodityFailAction implements Action {
	readonly type = REMOVE_COMMODITY_FAIL;

	constructor(public payload: ICommodity) { }
}

export type CommodityActions
	= AddCommodityAction
	| AddCommoditySuccessAction
	| AddCommodityFailAction
	| RemoveCommodityAction
	| RemoveCommoditySuccessAction
	| RemoveCommodityFailAction
	| LoadCommoditiesAction
	| LoadCommoditiesSuccessAction
	| LoadCommoditiesFailAction;
