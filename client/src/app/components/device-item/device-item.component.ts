import {Component, Input} from '@angular/core';
import {Device} from "../../shared/interfaces/device.interface";
import {DEVICE_ROUTE} from "../../consts.module";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent {
  @Input() device: Device
  protected readonly url = environment.url;
  constructor() {
    this.device = {
      id: "",
      name: "",
      price: 0,
      rating: 0,
      img: ""
    }
  }

  protected readonly DEVICE_ROUTE = DEVICE_ROUTE;
}
