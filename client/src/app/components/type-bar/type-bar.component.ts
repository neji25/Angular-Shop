import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";
import {Type} from "../../shared/interfaces/type.interface";
import {Observable, Subscription} from "rxjs";
import {Brand} from "../../shared/interfaces/brand.interface";

interface onDestroy {
}

@Component({
  selector: 'type-bar',
  templateUrl: './type-bar.component.html',
  styleUrls: ['./type-bar.component.css']
})
export class TypeBarComponent implements OnInit, OnDestroy {
  types: Type[] = []

  types$: Subscription = new Subscription();

  constructor(protected deviceService: DeviceService) {
  }

  ngOnInit() {
    this.types$ = this.deviceService.fetchTypes().subscribe(types => this.types = types)
  }

  ngOnDestroy() {
    this.types$.unsubscribe()
  }

}
