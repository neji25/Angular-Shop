import {Component, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: 'nav-bar.component.html',
  imports: [
    MatToolbarModule,
    MatButtonModule
  ]
})
export class NavBarComponent {
  
}
