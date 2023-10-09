import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  productLists:any=[];
  isLoader=true;
  msg:any;

  constructor(public pdtSer:ProductService ,public myActiveRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.myActiveRoute.params.subscribe({
      next:(params:Params)=>{
        
        if(params["catid"]){
         this. getProductsCategoryWise(params["catid"]);
         console.log(params);
        }
        else{
          this.getProductsList();
        }
      }
    })
  }
  getProductsList(){
    this.pdtSer.getProductlist().subscribe({
      next :(data:any[])=>{
         this.productLists=data;
         this.isLoader=false;
         console.log(data);
      },
      error:(error:any)=>{
         console.log(error);
      },
      complete:()=>{
        console.log("Completed");
      }
    })
  }
  getProductsCategoryWise(catid:any){
    this.pdtSer.getProductsCategorywise(catid).subscribe({
      next :(data:any[])=>{
         this.productLists=data;
         this.isLoader=false;
         console.log(data);
      },
      error:(error:any)=>{
         console.log(error);
      },
      complete:()=>{
        console.log("Completed");
      }
    })
  }
  addtoCart(pdtId:any , pdtPrice:any){
    this.pdtSer.addToCart(pdtId,pdtPrice).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.pdtSer.updateCart.next(data);
        this.msg=data;
      },error:(error:any)=>{
         this.msg="Something went wrong"
         this.router.navigateByUrl('login')
         console.log(error);
      }
    })

  }

}
