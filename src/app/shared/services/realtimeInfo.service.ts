import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "./auth.service";
import {map} from "rxjs";
import * as _ from 'lodash'
import {DataService} from "./data.service.spec";

@Injectable()
export class RealTimeInfoService {

  public userId: string | undefined;
  userRoles: Array<string | undefined>;
  data: any

  constructor(private auth: AuthService,
              private dataService: DataService,
              private db: AngularFireDatabase) {

    auth.user.pipe(map(user => {
      return this.userId = _.get(user, 'uid')
    })).subscribe()

    auth.user.pipe(map(user => {
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })).subscribe()

    dataService.data.pipe(map(data => {
      return this.data = _.get(data, 'weatherData')
    })).subscribe()
  }

  get canRead(): boolean {
    const allowed = ['reader', 'admin']
    return this.matchingRole(allowed)
  }

  get canEdit(): boolean {
    const allowed = ['admin']
    return this.matchingRole(allowed)
  }

  private matchingRole(allowedRoles: string[]): boolean {
    if(!this.auth.user) return false
    for(const role in allowedRoles) {
      if(this.userRoles[role]) {
        return true
      }
    }
    return false
  }

  getUserId() {
    return this.userId
  }

  getDataFromRTDB() {
    return this.data
  }
}
