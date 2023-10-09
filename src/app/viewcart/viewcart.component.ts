import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  myCartItems:any;
  myCartFinalPrice:any;
  msg="";
  constructor(public pdtSer:ProductService, public router:Router) { }

  ngOnInit(): void {
    this.viewMyCart();
    
  }
  viewMyCart(){
    this.pdtSer.getMyCartproducts().subscribe({
      next:(data:any)=>{
         console.log(data);
         this.myCartItems=data;
      },error:(error:any)=>{
         console.log(error);
         if(error.status===401){
            window.localStorage.clear();
            this.router.navigateByUrl('/**');
         }
      }
     })
   }
   updateCart(cartId:number,cartQty:number,pdtPrice:number){
      this.pdtSer.updateMyCartItems(cartId,cartQty,pdtPrice).subscribe({
         next:(data:any)=>{
          console.log(data);
          this.msg=data;
          var index = this. myCartItems.findIndex((obj:any)=>{
           return obj._id==cartId
           console.log(obj)
          })
          this.myCartItems[index].cartPdtQty=cartQty;
          this.myCartItems[index].cartPdtPrice=cartQty*pdtPrice;

          this.myCartFinalPrice= 0
          for(var x in this.myCartItems){
            this.myCartFinalPrice +=this.myCartItems[x].cartPdtPrice;
            console.log(this.myCartFinalPrice);
         }
         },
         error:(error:any)=>{
          console.log(error);
          this.msg="Something Went Wrong";
         }
      })
   }
   deleteCart(cartid:any){
       this.pdtSer.removedCartItems(cartid).subscribe({
        next:(data:any)=>{
         this.msg=data;
         alert('Are you sure want to delete');
         console.log(data);

         this.myCartItems= this.myCartItems.filter((obj:any)=>{
            return obj._id !=cartid; });

            this.myCartFinalPrice= 0
            for(var x in this.myCartItems){
              this.myCartFinalPrice +=this.myCartItems[x].pdtPrice;
             
           }
        },
        error:(error:any)=>{
          this.msg="something went wrong"
          console.log(error);
        }
       })
   }

}
