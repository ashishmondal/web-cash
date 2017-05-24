import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth.service";

@Component({
	selector: 'wc-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(/*public auth: AuthService*/) {
		//auth.handleAuth();
	}

	ngOnInit() {
	}

}
