import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceService} from "../../../services/device.service";
import {Type} from "../../../shared/interfaces/type.interface";
import {Subscription} from "rxjs";
import {Brand} from "../../../shared/interfaces/brand.interface";
import {Description} from "../../../shared/interfaces/device.interface";

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})

export class CreateDeviceComponent implements OnInit, OnDestroy {
  types: Type[] = []
  brands: Brand[] = []

  // Поля устройства
  name: string = ''
  price: number = 0
  file: File | null = null
  filename: string | undefined = ''
  brand: number = 0
  type: number = 0
  info: Description[] = []


  properties = [{
    title: '',
    description: '',
    number: Date.now()
  }]

  types$: Subscription = new Subscription();
  brands$: Subscription = new Subscription();

  constructor(protected deviceService: DeviceService) {
  }

  ngOnInit() {
    this.types$ = this.deviceService.fetchTypes().subscribe(types => this.types = types)
    this.brands$ = this.deviceService.fetchBrands().subscribe(brands => this.brands = brands)
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
  selectFile(event: any) {
    this.file = event.target.files[0]
    this.filename = this.file?.name
    console.log(this.file)
  }
  ngOnDestroy() {
    this.types$.unsubscribe()
    this.brands$.unsubscribe()
  }
}
