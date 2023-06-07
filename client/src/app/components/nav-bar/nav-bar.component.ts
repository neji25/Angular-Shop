import {Component} from '@angular/core';
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../../consts.module";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent {
  protected readonly SHOP_ROUTE: string = SHOP_ROUTE;
  constructor(protected auth: AuthService) {
  }

  protected readonly LOGIN_ROUTE = LOGIN_ROUTE;
  protected readonly ADMIN_ROUTE = ADMIN_ROUTE;
}
