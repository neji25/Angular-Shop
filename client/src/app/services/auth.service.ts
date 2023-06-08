import { Injectable } from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {delay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true

  private apiUrlSignUp = "http://localhost:5000/api/user/registration"
  private apiUrlSignIn = "http://localhost:5000/api/user/login"

  constructor(private http: HttpClient) {
  }
  registration(data: any) {
    return this.http.post(this.apiUrlSignUp, {email: data.email, password: data.password, role: "ADMIN"})
  }
  login(data: any) {
    return this.http.post(this.apiUrlSignIn, {email: data.email, password: data.password})
  }
  logout():void {
    this.isLoggedIn = false
  }
}
