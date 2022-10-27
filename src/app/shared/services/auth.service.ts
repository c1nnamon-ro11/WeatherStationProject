import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, of, switchMap, take} from "rxjs";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
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
      console.log('auth subscribe')
      // @ts-ignore
        this.user.next(user)
      })
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.afAuth.signInWithPopup(provider)
      .then(credential => {
        console.log('Update user')
        this.updateUser(credential.user)
      })
      .then(() => this.router.navigate(['dashboard']))
  }

  signOut() {
    this.afAuth.signOut()
  }

  private updateUser(authData:any) {
    authData.roles = { reader: true, admin: false}
    console.log(authData, authData)
    const userData = new User(authData)
    console.log(userData, 'user data')
    const ref = this.db.object('users/' + authData.uid)
    ref.valueChanges()
      .subscribe(user => {
        // @ts-ignore
        if(!user?.roles) {
          ref.update(userData)
        }
      })
  }
}


