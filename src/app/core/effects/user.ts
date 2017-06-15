import { AuthService } from '../services/auth.service';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class UserEffects {
	constructor(private action$: Actions, private authService: AuthService) {

	}
}
