import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './products/list/list.component';
import { LoginComponent } from './login/login.component';
import { AddproductsComponent } from './products/addproducts/addproducts.component';
import { ViewcartComponent } from './viewcart/viewcart.component';

const routes: Routes = [
  {path:'',component:ListComponent},
   {path:'login',component:LoginComponent},
   {path:'auth',loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'categories',redirectTo:'/',pathMatch:'full'},
  {path:'categories/:catid', component:ListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
