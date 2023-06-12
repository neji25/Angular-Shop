import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthResponse} from "../shared/interfaces/auth.interface";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService()

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
    return this.http.post<AuthResponse>(`${environment.url}/api/user/registration`, {email: data.email, password: data.password, role: "ADMIN"})
  }
  login(data: any):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.url}/api/user/login`, {email: data.email, password: data.password})
  }
  logout():void {
    localStorage.removeItem("token")
  }
}
