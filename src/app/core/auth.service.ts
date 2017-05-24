import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Injectable()
export class AuthService {
	constructor() { }

	loginWithGoogle() {
		//this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
	}

	logout() {
		//this.afAuth.auth.signOut();
	}
}