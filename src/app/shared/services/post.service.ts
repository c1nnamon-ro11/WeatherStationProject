import { Injectable } from '@angular/core';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AuthService} from "./auth.service";
import 'rxjs/Rx';
import {map} from "rxjs";
import * as _ from 'lodash'
@Injectable()
export class PostService {

  userRoles: Array<string>;

  constructor(private auth: AuthService,
              private db: AngularFireDatabase) {

    auth.user.pipe(map(user => {
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })).subscribe()
  }

  getPosts(key: string) {
    return this.db.object('posts/' + key)
  }

  get canRead(): boolean {
    const allowed = ['admin', 'author', 'reader']
    return this.matchingRole(allowed)
  }

  get canEdit(): boolean {
    const allowed = ['admin', 'author']
    return this.matchingRole(allowed)
  }

  get canDelete(): boolean {
    const allowed = ['admin']
    return this.matchingRole(allowed)
  }

  private matchingRole(allowedRoles: string[]): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }

  editPost(post: any, newData: any) {
    if (this.canEdit) {
      return this.db.object('posts/' + post.$key).update(newData)
    }
    else return console.log('action prevented!')
  }

  deletePost(key: any) {
    if (this.canDelete) {
      return this.db.object('posts/' + key).remove()
    }
    else return console.log('action prevented!')
  }

}
