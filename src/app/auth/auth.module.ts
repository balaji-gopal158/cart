import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CatagoriesComponent } from '../catagories/catagories.component';
import { AddproductsComponent } from '../products/addproducts/addproducts.component';
import { ViewcartComponent } from '../viewcart/viewcart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddproductsComponent,
    
    ViewcartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
