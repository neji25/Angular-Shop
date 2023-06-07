import { Component } from '@angular/core';
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent {
  properties = [{
    title: '',
    description: '',
    number: Date.now()
  }]

  constructor(protected device: DeviceService) {
  }

  addInfo() {
    this.properties.unshift({
      title: '',
      description: '',
      number: Date.now()
    })
  }
  removeInfo(number: number) {
    this.properties = this.properties.filter(i => i.number !== number)
  }
}
