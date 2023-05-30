import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {DevicePageComponent} from "./pages/device-page/device-page.component";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./consts.module";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: ADMIN_ROUTE, component: AdminComponent, canActivate: [AuthGuard]},
  {path: LOGIN_ROUTE, component: AuthComponent},
  {path: REGISTRATION_ROUTE, component: AuthComponent},
  {path: SHOP_ROUTE, component: ShopComponent},
  {path: BASKET_ROUTE, component: BasketComponent, canActivate: [AuthGuard]},
  {path: DEVICE_ROUTE + '/:id', component: DevicePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }

}
