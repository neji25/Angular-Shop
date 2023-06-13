import { Component, OnInit } from '@angular/core';
import {Description, Device} from "../../shared/interfaces/device.interface";
import {environment} from "../../../environments/environment";
import {Subscription} from "rxjs";
import {DeviceService} from "../../services/device.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.css']
})
export class DevicePageComponent implements OnInit {
  Number = Number;
  url: string = environment.url;
  id: string = ""
  device: Device = {id: "", name: "", price: 0, rating: 0, img: ""}
  device$: Subscription = new Subscription
  description: Description[] = [
    {id: "1", title: "Оперативная память", description: '5 гб'},
    {id: "2", title: "Камера", description: '12 Мп'},
    {id: "3", title: "Процессор", description: 'Пентиум 3'},
    {id: "4", title: "Кол-во ядер", description: '2'},
    {id: "5", title: "Аккумулятор", description: '4000'},
  ]
  constructor(
    protected deviceService: DeviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.device$ = this.deviceService.fetchDevice(this.id).subscribe(device => {this.device = device})
  }

}
