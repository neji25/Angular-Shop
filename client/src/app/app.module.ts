import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BasketComponent } from './pages/basket/basket.component';
import { DevicePageComponent } from './pages/device-page/device-page.component';
import { ShopComponent } from './pages/shop/shop.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    AppRoutingModule,
    NavBarComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
