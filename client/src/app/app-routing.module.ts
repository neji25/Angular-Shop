import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {BasketComponent} from "./pages/basket/basket.component";
import {DevicePageComponent} from "./pages/device-page/device-page.component";

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: AuthComponent},
  {path: 'registration', component: AuthComponent},
  {path: '', component: ShopComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'device', component: DevicePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
  }

}
