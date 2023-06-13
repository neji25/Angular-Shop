import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {Device, DeviceList} from "../../shared/interfaces/device.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit, OnDestroy {
  devices: Device[] = [];
  devices$: Subscription = new Subscription
  constructor(protected deviceService: DeviceService) {
  }
  ngOnInit() {
    this.deviceService.fetchAllDevices().subscribe((devices: DeviceList) => this.devices = devices.rows);
  }

  ngOnDestroy() {
    this.devices$.unsubscribe();
  }
}
