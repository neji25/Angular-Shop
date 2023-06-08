import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../consts.module";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent {
  protected readonly SHOP_ROUTE: string = SHOP_ROUTE;
  constructor(protected auth: AuthService,
              private router: Router
              ) {
  }

  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
  protected readonly ADMIN_ROUTE = ADMIN_ROUTE;

  logout() {
    this.auth.logout()
    this.router.navigateByUrl(SHOP_ROUTE)
  }
}
