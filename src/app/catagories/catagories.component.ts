import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catagories',
  templateUrl: './catagories.component.html',
  styleUrls: ['./catagories.component.css']
})
export class CatagoriesComponent implements OnInit {
  catagoryLists:any;
  constructor( public pdtser:ProductService) { }

  ngOnInit(): void {

    this.pdtser.getCategory().subscribe({
      next:(data:any)=>{
         console.log(data);
        this.catagoryLists=data;
     },
     error:(error:any)=>{
      console.log(error);
          
       }
   })
  }

}
