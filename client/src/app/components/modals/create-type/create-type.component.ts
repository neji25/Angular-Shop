import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DeviceService} from "../../../services/device.service";
import {Type} from "../../../shared/interfaces/type.interface";

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnDestroy{
  type: string = ""
  type$: Subscription = new Subscription

  constructor(private deviceService: DeviceService) {
  }

  addType() {
    this.type$ = this.deviceService.createType({name: this.type}).subscribe(type => {})
  }
  ngOnDestroy() {
    this.type$.unsubscribe()
  }
}
