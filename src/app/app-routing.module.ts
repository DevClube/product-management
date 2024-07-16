import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {AddProductsComponent} from "./components/add-products/add-products.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'add-product', component: AddProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
