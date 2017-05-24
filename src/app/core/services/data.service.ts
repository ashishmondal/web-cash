import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {
	private headers = new Headers({
		'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJRCIsIm5hbWUiOiJ1c2VyTmFtZSIsImlhdCI6MTQ5NDEzNTU4MX0.m-huO2O3JN6bmdUpW5aKVvGf2lbwodgIV1BPW-MuIaI'
	});

	constructor(private http: Http) {

	}

	login() {

	}

	public getData<TData>(endPoint: string): Observable<TData>{
		return this.http.get(`http://localhost:3000/v1.0/${endPoint}`, { headers: this.headers })
			.map(response => response.json().data[0] as TData);
	}
}
