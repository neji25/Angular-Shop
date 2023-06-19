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
  closeDialog: boolean = false

  types: Type[] = []
  brands: Brand[] = []

  // Поля устройства
  name: string = ''
  price: number = 0
  file: File | null = null
  brandId: number = 0
  typeId: number = 0

  properties: Description[] = []

  types$: Subscription = new Subscription();
  brands$: Subscription = new Subscription();
  newDevice$: Subscription = new Subscription();

  constructor(protected deviceService: DeviceService) {
  }

  ngOnInit() {
    this.types$ = this.deviceService.fetchTypes().subscribe(types => this.types = types)
    this.brands$ = this.deviceService.fetchBrands().subscribe(brands => this.brands = brands)
  }

  onSelectedType(id: string) {
    this.typeId = Number(id)
  }
  onSelectedBrand(id: string) {
    this.brandId = Number(id)
  }

  addInfo() {
    this.properties.push({
      id: String(Date.now()),
      title: '',
      description: ''
    })
  }

  changeInfo = (id: string, event: any) => {
    this.properties = this.properties.map(prop => prop.id === id ? {...prop, [event.target.name]: event.target.value}: prop)
  }

  addDevice() {
    const formData = new FormData()
    formData.append('name', this.name)
    formData.append('price', `${this.price}`)
    formData.append('img', this.file ? this.file : '')
    formData.append('brandId', `${this.brandId}`)
    formData.append('typeId', `${this.typeId}`)
    formData.append('properties', JSON.stringify(this.properties))
    this.newDevice$ = this.deviceService.createDevice(formData).subscribe(
      () => {
      this.closeDialog = true
      },
      error => {
        console.log(error)
    }
    )
  }

  removeInfo(id: string) {
    this.properties = this.properties.filter(i => i.id !== id)
  }
  selectFile(event: any) {
    this.file = event.target.files[0]
    console.log(this.file)
  }
  ngOnDestroy() {
    this.types$.unsubscribe()
    this.brands$.unsubscribe()
    this.newDevice$.unsubscribe()
  }
}
