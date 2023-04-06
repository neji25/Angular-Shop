import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './app/pages/admin/admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BasketComponent } from './pages/basket/basket.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { ShopComponent } from './pages/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BasketComponent,
    DevicePageComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
