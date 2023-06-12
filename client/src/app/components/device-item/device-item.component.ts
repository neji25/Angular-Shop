import {Component, Input} from '@angular/core';
import {Device} from "../../shared/interfaces/device.interface";
import {DEVICE_ROUTE} from "../../consts.module";

@Component({
  selector: 'device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent {
  @Input() device: Device
  constructor() {
    this.device = {
      id: "",
      name: "",
      price: 0,
      raiting: 0,
      img: ""
    }
  }

  protected readonly DEVICE_ROUTE = DEVICE_ROUTE;
}
