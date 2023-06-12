import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {Brand} from "../../shared/interfaces/brand.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'brand-bar',
  templateUrl: './brand-bar.component.html',
  styleUrls: ['./brand-bar.component.css']
})
export class BrandBarComponent implements OnInit, OnDestroy {
  brands: Brand[] = []
  brands$: Subscription = new Subscription();
  constructor(protected deviceService: DeviceService) {
  }

  ngOnInit() {
    this.brands$ = this.deviceService.fetchBrands().subscribe(brands => this.brands = brands)
  }

  ngOnDestroy() {
    this.brands$.unsubscribe()
  }
}
