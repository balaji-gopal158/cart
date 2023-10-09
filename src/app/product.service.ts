import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  updateCart= new Subject();
  constructor( public http:HttpClient) { }

  getProductlist(){
    return this.http.get<any[]>("http://localhost:3000/listproducts");
  }
  getCategory(){
    return this.http.get<any>("http://localhost:3000/getcategories");
  }
  //getMyCartproducts(){
   // return this.http.get("http://localhost:3000/mycart",{
     // 'headers': new HttpHeaders ({
        //'myauthtoken': this.userSer.getMyToken() 
     // })
    //});
   //}
  getMyCartproducts(){
    return this.http.get<any>("http://localhost:3000/mycart");
  }
  getProductsCategorywise(catid:any){
    return this.http.get<any>("http://localhost:3000/getpdtcatwise/"+catid);
  }
  addProducts(data:any){
    return this.http.post<any>("http://localhost:3000/addproducts",data)
  }
  addToCart(pdtId:any,pdtPrice:any){
    return this. http.post<any>("http://localhost:3000/addtocart",{cartPdtId:pdtId,cartPdtPrice:pdtPrice})
  }
  getMyCartCount(){
    return this. http.get<any>("http://localhost:3000/cartcount");
  }
  updateMyCartItems(cartId:number,cartQty:number,pdtPrice:number){
     return this.http.put<any>("http://localhost:3000/updatecart",{cartId:cartId,cartPdtQty:cartQty,pdtPrice:pdtPrice});
  }
  removedCartItems(cartid:any){
    return this.http.delete<any>("http://localhost:3000/removecart/"+cartid)
  }


}
