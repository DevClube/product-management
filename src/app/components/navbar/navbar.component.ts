import { Component } from '@angular/core';
import {AppStateService} from "../../service/app-state.service";
import {LoadingService} from "../../service/loading.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public appState: AppStateService,
              public laodingService: LoadingService) {
  }

  actions : Array<any> = [
    {name: 'Home', url: '/home', icon:"bi bi-house"},
    {name: 'Products', url: '/products', icon:"bi bi-box-seam"},
    {name: 'Add Products', url: '/add-product', icon:"bi bi-plus"},
  ];

  currentAction:any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
