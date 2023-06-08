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

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import { TypeBarComponent } from './components/type-bar/type-bar.component';
import {MatListModule} from "@angular/material/list";
import { BrandBarComponent } from './components/brand-bar/brand-bar.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatChipsModule} from "@angular/material/chips";
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';
import {NgOptimizedImage} from "@angular/common";
import { CreateBrandComponent } from './components/modals/create-brand/create-brand.component';
import { CreateTypeComponent } from './components/modals/create-type/create-type.component';
import { CreateDeviceComponent } from './components/modals/create-device/create-device.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {TokenInterceptorService} from "./services/interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    BasketComponent,
    DevicePageComponent,
    ShopComponent,
    NavBarComponent,
    TypeBarComponent,
    BrandBarComponent,
    DeviceListComponent,
    DeviceItemComponent,
    CreateBrandComponent,
    CreateTypeComponent,
    CreateDeviceComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatListModule,
        MatButtonToggleModule,
        MatChipsModule,
        NgOptimizedImage,
        NgbModule,
        MatSelectModule,
        MatDialogModule,
        MaterialFileInputModule,
        MatIconModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [AuthService,
                {
                  provide: HTTP_INTERCEPTORS,
                  useClass: TokenInterceptorService,
                  multi: true
                }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
