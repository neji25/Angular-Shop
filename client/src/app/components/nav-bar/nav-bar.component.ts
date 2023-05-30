import {Component, ViewChild} from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: 'nav-bar.component.html',
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class NavBarComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | any

  someMethod() {
    this.trigger.openMenu();
  }
}
