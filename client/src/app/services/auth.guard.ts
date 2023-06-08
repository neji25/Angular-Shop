import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import {AuthService} from "./auth.service";
import {SHOP_ROUTE} from "../consts.module";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.isAuthenticated()) {
      this.router.navigateByUrl(SHOP_ROUTE)
      return false
    }
    return true
  }
}
