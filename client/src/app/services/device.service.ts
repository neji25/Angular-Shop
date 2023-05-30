import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  types = [
    {id: 1, name: 'Холодилники'},
    {id: 2, name: 'Смартфоны'}
  ]
}
