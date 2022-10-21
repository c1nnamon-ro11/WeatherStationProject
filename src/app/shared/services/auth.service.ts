import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { Router } from '@angular/router';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public aFireStore: AngularFirestore, // Firestore service
    public aFireAuth: AngularFireAuth, // Firebase auth service
    public router: Router,
    public ngZone: NgZone // service to remove outside scope warning
  )
  {
    // Saving user data in localstorage and setting up when logged out
    this.aFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }
  // Property for user loggin status
  // Returns true if user is logged and email is verified, false otherwise
  get isUserLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false; //? true : false;
  }

  /*
  POSSIBLE TO ADD GOGGLE AUTH
  */
  // Sign in with user email and password
  SignIn(email: string, password: string) {
    return this.aFireAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.aFireAuth.authState.subscribe((user) => {
          if(user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign up with user email and password
  SignUp(email: string, password: string) {
    return this.aFireAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Send email for user verification
      this.SendVerificationEmail();
      this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Sign Out
  SignOut() {
    return this.aFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
  // Reset forgotten password
  RestorePassword(passwordResetEmail: string){
    return this.aFireAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent. Please, open your inbox and enter new password.');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Helping methods

  // Set user data to FirestoreDocument
  SetUserData(user: any) {
    const userReference: AngularFirestoreDocument<any> = this.aFireStore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }
    return userReference.set(userData, {merge: true,});
  }
  // Send verification email to user
  SendVerificationEmail() {
    return this.aFireAuth.currentUser
      .then((user: any) => user.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }
}
