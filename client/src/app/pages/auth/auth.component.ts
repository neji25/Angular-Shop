import { Component, OnInit } from '@angular/core';
import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../consts.module";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-services',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  protected windowHeight: number
  protected isLogin: boolean

  constructor(private router: Router,
              protected auth: AuthService) {
    this.windowHeight = window.innerHeight - 64
    this.isLogin = this.router.url === `/${LOGIN_ROUTE}`
  }

  ngOnInit(): void {
    console.log(this.router.url === `/${LOGIN_ROUTE}`)
  }

  protected readonly window = window;
  protected readonly REGISTRATION_ROUTE = REGISTRATION_ROUTE;
  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
  protected readonly ADMIN_ROUTE = ADMIN_ROUTE;
}
