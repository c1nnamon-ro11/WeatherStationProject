import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "./auth.service";
import {filter, map, switchMap, tap} from "rxjs";
import * as _ from 'lodash'
import {IParametersData} from "../../models/ParametersData";
import {parametersData as parametersReference} from "../../data/DataBaseParametersReference";
import {DataService} from "./data.service.spec";
import {get} from "@angular/fire/database";
@Injectable()
export class RealTimeInfoService {

  public userId: string | undefined;
  userRoles: Array<string | undefined>;
  parameters: IParametersData[] = parametersReference;
  local: any

  constructor(private auth: AuthService,
              private dataSer: DataService,
              private db: AngularFireDatabase) {

    auth.user.pipe(map(user => {
      return this.userId = _.get(user, 'uid')
    })).subscribe()

    auth.user.pipe(map(user => {
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })).subscribe()

    // dataSer.data.pipe(map(data => {
    //   return this.local = _.get(data, 'weatherData')
    // })).subscribe()
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
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }

  getUserId() {
    return this.userId
  }

  getLocal() {
    return this.local
  }
}
