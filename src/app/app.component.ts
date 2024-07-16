import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
