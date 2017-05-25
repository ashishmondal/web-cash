import { Observable } from "rxjs/Observable";

export interface IDefferedService {
	ready$: Observable<any>;
}