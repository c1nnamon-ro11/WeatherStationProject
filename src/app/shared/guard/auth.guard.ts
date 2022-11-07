import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {filter, map, Observable, take, tap} from 'rxjs';
import {AuthService} from "../services/auth.service";

import {RealTimeInfoService} from "../services/realtimeInfo.service";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public realTimeInfoService: RealTimeInfoService,
    public router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let zalupa = 0

    return this.authService.user
      .pipe(
        tap(console.log),
        tap((user) => {
          if(!user && zalupa > 0){
            this.router.navigate(['sign-in'])
          }
          zalupa++
        }),
        filter(Boolean),
        map((user) => !!user),
        //take(2)
      )

    // if(!this.realTimeInfoService.IsUserLoggedIn()) {
    //   this.router.navigate(['sign-in'])
    // }
    // return true;
  }

}
