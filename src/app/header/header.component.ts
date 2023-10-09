import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount:number=0;
  constructor(public Userser:UsersService ,public router:Router, public pdtSer:ProductService) { }

  ngOnInit(): void {
    this.pdtSer.updateCart.subscribe({
      next:(data:any)=>{
        console.log(data);
        this.getMyCartCountItems();
      }
    })
    this.getMyCartCountItems();
  }

  doLogout(){
    window.localStorage.clear();
    this.router.navigateByUrl('/');
  }
 getMyCartCountItems(){
  this.pdtSer.getMyCartCount().subscribe({
    next:(data:any)=>{
     this.cartCount=data;
     console.log(data);
    },error:(error:any)=>{
      console.log(error)
    }
  })
 }

}
