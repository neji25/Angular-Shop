import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnDestroy{
  brand: string = ""
  brand$: Subscription = new Subscription

  constructor(private deviceService: DeviceService) {
  }

  addBrand() {
    this.brand$ = this.deviceService.createBrand({name: this.brand}).subscribe(type => {})
  }
  ngOnDestroy() {
    this.brand$.unsubscribe()
  }
}
