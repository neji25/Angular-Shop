import { Component, OnInit } from '@angular/core';
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../consts.module";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  protected windowHeight: number
  protected isLogin: boolean

  constructor(private router: Router) {
    this.windowHeight = window.innerHeight - 64
    this.isLogin = this.router.url === `/${LOGIN_ROUTE}`
  }

  ngOnInit(): void {
    console.log(this.router.url === `/${LOGIN_ROUTE}`)
  }

  protected readonly window = window;
  protected readonly REGISTRATION_ROUTE = REGISTRATION_ROUTE;
  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
}
