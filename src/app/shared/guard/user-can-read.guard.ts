import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {filter, map, Observable, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {RealTimeInfoService} from "../services/realtimeInfo.service";

@Injectable({
  providedIn: 'root'
})
export class UserCanReadGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public realTimeInfoService: RealTimeInfoService,
    public router: Router
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //console.log(this.realTimeInfoService.CanRead, 'user')
    //return this.realTimeInfoService.CanRead
    let counter = 0

    return this.authService.user
      .pipe(
        tap((user) => {
          if(!user?.roles.reader && counter > 0){
            this.router.navigate(['dashboard'])
          }
          counter++
        }),
        filter(Boolean),
        map((user) => user?.roles.reader),
      )
  }
}
