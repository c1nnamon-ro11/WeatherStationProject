import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import {BehaviorSubject, of, switchMap} from "rxjs";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // User instance
  user = new BehaviorSubject<User | null>(null);
  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {

    this.afAuth.authState// @ts-ignore
      .pipe(switchMap(auth => {
        if (auth) {
          // signed in
          return this.db.object('users/'+ auth.uid).valueChanges()
        } else {
          // not signed in
          return of(null)
        }
      })
      ).subscribe(user => {
      // @ts-ignore
        this.user.next(user)
      })
  }

  // Sing in by credentials
  SignInWithCredentials(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.UpdateUser(credential.user)
      })
      .then(() => this.router.navigate(['dashboard']))
      .catch((error) =>
      {
        console.log(error.message)
      }
      )
  }

  // Sign up by credentials
  SignUpWithCredentials(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.SendVerificationMail();
        this.UpdateUser(credential.user)
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sending verification email for signing up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  // Call password reset
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Login by google provider
  GoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.afAuth.signInWithPopup(provider)
      .then(credential => {
        this.UpdateUser(credential.user)
      })
      .then(() => this.router.navigate(['dashboard']))
  }

  // Signing out from app
  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['sign-in']);
    });
  }

  private UpdateUser(authData:any) {
    authData.roles = { reader: false}
    const userData = new User(authData)
    const ref = this.db.object('users/' + authData.uid)
    ref.valueChanges()
      .subscribe(user => {
        // @ts-ignore
        if(!user?.email) {
          ref.update(userData)
        }
      })
  }
}


