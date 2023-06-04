import { Injectable } from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true

  login() {
    this.isLoggedIn = true
  }
  logout():void {
    this.isLoggedIn = false
  }
}
