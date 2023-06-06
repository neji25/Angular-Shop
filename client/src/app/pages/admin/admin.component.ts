import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeviceService} from "../../services/device.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateTypeComponent} from "../../components/modals/create-type/create-type.component";
import {CreateBrandComponent} from "../../components/modals/create-brand/create-brand.component";
import {CreateDeviceComponent} from "../../components/modals/create-device/create-device.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  constructor(private modalService: NgbModal,
              protected device: DeviceService,
              protected dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  openTypeModal() {
   const dialogRef = this.dialog.open(CreateTypeComponent)
    dialogRef.afterClosed().subscribe(type => {
      console.log(`Dialog type: ${type}`)
    })
  }
  openBrandModal() {
    const dialogRef = this.dialog.open(CreateBrandComponent)
    dialogRef.afterClosed().subscribe(brand => {
      console.log(`Dialog brand: ${brand}`)
    })
  }
  openDeviceModal() {
    const dialogRef = this.dialog.open(CreateDeviceComponent)
    dialogRef.afterClosed().subscribe(device => {
      console.log(`Dialog brand: ${device}`)
    })
  }
}
