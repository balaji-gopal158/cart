import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  selectedImg:any=[]
  categories:any=[];
  msg:any
  constructor(public pdtSer:ProductService) { }

  ngOnInit(): void {
    this.pdtSer.getCategory().subscribe({
      next:(data:any)=>{
        console.log(data);
        this.categories=data;
      },
      error:(error:any)=>{
         console.log(error)
      }
    })
  }
 
  selectImg(event:any){
    this.selectedImg= event.target.files[0];
    console.log(this.selectedImg);
 }
 crateProducts(form:NgForm){
   var fd= new FormData();
   fd.append('catId', form.value.catId);
   fd.append('Pdtname',form.value.Pdtname);
   fd.append('pdtDesc', form.value.pdtDesc);
   fd.append('pdtPrice',form.value.pdtPrice);
   fd.append('pdtImg',this.selectedImg);
   console.log(fd);
   this.pdtSer.addProducts(fd).subscribe({
     next:(data:any)=>{
        console.log(data);
        this.msg=data;

     },error:(error:any)=>{
        console.log(error);
        this.msg="Something went wrong";
     }
   })
 }
}
