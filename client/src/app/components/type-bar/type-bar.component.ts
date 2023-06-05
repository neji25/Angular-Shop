import { Component } from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'type-bar',
  templateUrl: './type-bar.component.html',
  styleUrls: ['./type-bar.component.css']
})
export class TypeBarComponent {
  constructor(protected device: DeviceService) {
  }
  setSelectedType(id: number) {
    this.device.setSelectedType(id)
  }
}
