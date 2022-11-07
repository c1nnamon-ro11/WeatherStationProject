import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "./auth.service";
import {map} from "rxjs";
import _ from 'lodash';
import {DataService} from "./data.service";
import {Roles} from "./user";

@Injectable()
export class RealTimeInfoService {

  public userId: string | undefined;
  userRoles: Array<string | undefined>;
  userRolesValues: Roles | undefined;
  data: any

  constructor(private auth: AuthService,
              private dataService: DataService,
              private db: AngularFireDatabase) {

    // Get user uid
    auth.user.pipe(map(user => {
      return this.userId = _.get(user, 'uid')
    })).subscribe()

    // Get user roles
    auth.user.pipe(map(user => {
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })).subscribe()

    // Get user roles as object
    auth.user.pipe(map(user => {
      return this.userRolesValues = _.get(user, 'roles')
    })).subscribe()

    // Get data of user by uid
    dataService.data.pipe(map(data => {
      return this.data = _.get(data, 'weatherData')
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
