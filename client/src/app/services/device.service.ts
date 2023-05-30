import { Injectable } from '@angular/core';
import {Type} from "../shared/types/type.interface";
import {Brand} from "../shared/types/brand.interface";
import {Device} from "../shared/types/device.interface";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  types: Type[] = [
    {id: 1, name: 'Холодилники'},
    {id: 2, name: 'Смартфоны'}
  ]
  brands: Brand[] = [
    {id: 1, name: "Samsung"},
    {id: 2, name: "Apple"},
    {id: 3, name: "Xiaomi"},
    {id: 4, name: "Huawei"}
  ]
  device: Device[] = [
    {id: 1, name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: 2, name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: 3, name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: 4, name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: 5, name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
  ]
}
