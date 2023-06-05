import { Component } from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'brand-bar',
  templateUrl: './brand-bar.component.html',
  styleUrls: ['./brand-bar.component.css']
})
export class BrandBarComponent {
  constructor(protected device: DeviceService) {
  }
}
