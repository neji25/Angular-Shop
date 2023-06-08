import { Component, OnInit } from '@angular/core';
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../consts.module";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-services',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  protected readonly window = window;
  protected readonly REGISTRATION_ROUTE = REGISTRATION_ROUTE;
  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
  protected readonly ADMIN_ROUTE = ADMIN_ROUTE;

  protected windowHeight: number
  protected isLogin: boolean


  constructor(private router: Router,
              protected auth: AuthService) {
    this.windowHeight = window.innerHeight - 64
    this.isLogin = this.router.url === `/${LOGIN_ROUTE}`
  }
  onAuthSubmit(form: NgForm) {
    const user = {
      email: form.control.get('email')?.value,
      password: form.control.get('password')?.value
    }
    if(this.isLogin) {
      this.auth.login(user).subscribe(response => {
        this.auth.setToken(response.token)
        this.router.navigateByUrl(SHOP_ROUTE)
      })
    } else {
      this.auth.registration(user).subscribe(response => {
        this.auth.setToken(response.token)
        this.router.navigateByUrl(SHOP_ROUTE)
      })
    }
  }

  ngOnInit(): void {
    console.log(this.router.url === `/${LOGIN_ROUTE}`)
  }


}
