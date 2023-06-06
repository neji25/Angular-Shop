import { Component } from '@angular/core';
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent {
  constructor(protected device: DeviceService) {
  }
}
