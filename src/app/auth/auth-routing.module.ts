import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcartComponent } from '../viewcart/viewcart.component';
import { AddproductsComponent } from '../products/addproducts/addproducts.component';
const routes: Routes = [
  { path:'viewcart',component:ViewcartComponent},
  {path:'addproducts',component:AddproductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
