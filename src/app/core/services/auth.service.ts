import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase/app';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';

@Injectable()
export class AuthService {
	user$: Observable<User>;
	redirectUrl: string;

	public get isAuthenticated(): boolean {
		return !!this.afAuth.auth.currentUser;
	}

	constructor(public afAuth: AngularFireAuth) {
		this.user$ = afAuth.authState;
		this.user$.subscribe(u => console.log(afAuth.auth.currentUser));
	}

	login() {
		return Observable.from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
	}

	logout() {
		return Observable.from(this.afAuth.auth.signOut());
	}
}