import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "./auth.service";
import {BehaviorSubject, map} from "rxjs";
import _ from 'lodash';
import {DataService} from "./data.service";
import {Roles} from "./user";

@Injectable()
export class RealTimeInfoService {

  public userId: string | undefined;
  userRolesValues: Roles | undefined;
  data: any;
  savedData: any;
  savedData$ = new BehaviorSubject<any>([]);

  constructor(private auth: AuthService,
              private dataService: DataService) {

    // Get user uid
    auth.user.pipe(map(user => {
      return this.userId = _.get(user, 'uid')
    })).subscribe()

    // Get user roles as object
    auth.user.pipe(map(user => {
      return this.userRolesValues = _.get(user, 'roles')
    })).subscribe()

    // Get current data of user by uid
    dataService.data.pipe(map(data => {
      return this.data = _.get(data, 'CurrentData')
    })).subscribe()

    // Get historical data by uid
    dataService.data.pipe(map(data => {
      this.savedData$.next(_.get(data, 'HistoricalData'))
      return this.savedData = _.get(data, 'HistoricalData')
    })).subscribe()
  }

  // Can read permission rule
  get CanRead(): boolean {
    const allowed = ['reader', 'admin']
    return this.MatchingRole(allowed)
  }

  // Can edit permission rule
  get CanEdit(): boolean {
    const allowed = ['admin']
    return this.MatchingRole(allowed)
  }

  // Method-helper for user permissions
  private MatchingRole(allowedRoles: string[]): boolean {
    if(!this.auth.user || this.userRolesValues === undefined) return false

    let flag = false
    allowedRoles.forEach((role) => {
      if(this.userRolesValues?.[role]) {
        flag = true
      }
    })
    return flag
  }

  // Get methods
  GetUserId() {
    return this.userId;
  }

  GetDataFromRTDB() {
    return this.data;
  }
}
