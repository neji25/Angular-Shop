import { Injectable } from '@angular/core';
import {Observable, of, tap} from "rxjs";
import {delay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import jwtDecode from "jwt-decode";
import {AuthResponse} from "../shared/types/auth.interface";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  private jwtHelper: JwtHelperService = new JwtHelperService()

  private apiUrlSignUp = "http://localhost:5000/api/user/registration"
  private apiUrlSignIn = "http://localhost:5000/api/user/login"

  constructor(private http: HttpClient) {
  }
  public isAuthenticated():boolean {
    const token = this.getToken()
    return !this.jwtHelper.isTokenExpired(token)
  }
  public getToken():string {
    const token = localStorage.getItem('token')
    return token ? token : ''
  }
  public setToken(token: string):void {
    localStorage.setItem('token', token)
  }
  registration(data: any):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrlSignUp, {email: data.email, password: data.password, role: "ADMIN"})
  }
  login(data: any):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrlSignIn, {email: data.email, password: data.password})
  }
  logout():void {
    localStorage.removeItem("token")
  }
}
