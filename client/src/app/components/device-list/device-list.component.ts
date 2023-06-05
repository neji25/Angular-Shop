import { Component } from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  constructor(protected devices: DeviceService) {
  }
}
