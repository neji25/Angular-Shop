import { Injectable } from '@angular/core';
import {Type} from "../shared/interfaces/type.interface";
import {Brand} from "../shared/interfaces/brand.interface";
import {Device, DeviceList, submitDevice} from "../shared/interfaces/device.interface";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http: HttpClient) {}

  createType(type: Object): Observable<Type>{
    return this.http.post<Type>(`${environment.url}/api/type`, type)
  }
  fetchTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.url}/api/type`)
  }

  createBrand(brand: Object):Observable<Brand> {
    return this.http.post<Brand>(`${environment.url}/api/brand`, brand)
  }
  fetchBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${environment.url}/api/brand`)
  }

  createDevice(device: FormData):Observable<submitDevice> {
    return this.http.post<submitDevice>(`${environment.url}/api/device`, device)
  }
  fetchAllDevices():Observable<DeviceList> {
    return this.http.get<DeviceList>(`${environment.url}/api/device`)
  }
  fetchDevice(id: string):Observable<Device> {
    return this.http.get<Device>(`${environment.url}/api/device/${id}`)
  }
}
