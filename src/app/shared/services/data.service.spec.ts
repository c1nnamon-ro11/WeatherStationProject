import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {BehaviorSubject, of, switchMap} from "rxjs";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  data = new BehaviorSubject<any | null>(null);
  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    //console.log('wtf')
    this.afAuth.authState// @ts-ignore
      .pipe(switchMap(auth => {
          if (auth) {
            // signed in
            return this.db.object('data/'+ auth.uid).valueChanges()
          } else {
            // not signed in
            return of(null)
          }
        })
      ).subscribe(data => {
      // @ts-ignore
      this.data.next(data)
    })
  }
}


