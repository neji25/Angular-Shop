import { Injectable } from '@angular/core';
import {Type} from "../shared/interfaces/type.interface";
import {Brand} from "../shared/interfaces/brand.interface";
import {Device} from "../shared/interfaces/device.interface";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  device: Device[] = [
    {id: "1", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: "2", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: "3", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: "4", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
    {id: "5", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'},
  ]

  constructor(private http: HttpClient) {
  }

  get getDevices() {
    return this.device
  }
  createType(type: Type):Observable<Type> {
    return this.http.post<Type>(`${environment.url}/api/type`, type)
  }
  fetchTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.url}/api/type`)
  }

  createBrand(type: Brand):Observable<Brand> {
    return this.http.post<Brand>(`${environment.url}/api/brand`, type)
  }
  fetchBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.url}/api/brand`)
  }

  createDevice(device: Device):Observable<Device> {
    return this.http.post<Device>(`${environment.url}/api/device`, device)
  }
  fetchAllDevices():Observable<Device[]> {
    return this.http.get<Device[]>(`${environment.url}/api/device`)
  }
  fetchDevice(id: string):Observable<Device> {
    return this.http.get<Device>(`${environment.url}/api/device/${id}`)
  }
}
