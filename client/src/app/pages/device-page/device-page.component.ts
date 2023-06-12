import { Component, OnInit } from '@angular/core';
import {Description, Device} from "../../shared/interfaces/device.interface";

@Component({
  selector: 'device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  device: Device = {id: "1", name: "Iphone 12 pro", price: 25000, raiting: 5, img: '../../assets/phone.png'}
  description: Description[] = [
    {id: "1", title: "Оперативная память", description: '5 гб'},
    {id: "2", title: "Камера", description: '12 Мп'},
    {id: "3", title: "Процессор", description: 'Пентиум 3'},
    {id: "4", title: "Кол-во ядер", description: '2'},
    {id: "5", title: "Аккумулятор", description: '4000'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly Number = Number;
}
