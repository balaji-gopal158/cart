import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http:HttpClient) { }

  userRegistration(data:any){
    return this.http.post<any>("http://localhost:3000/register",data);
}
userNameCheckavail(username:any){
  return this.http.get<any>("http://localhost:3000/usernamecheck/"+username);
}
doLogin(data:any){
  return this.http.post<any>("http://localhost:3000/login",data);
}

isLoggedin(){
  return !!window.localStorage.getItem("loggedUsers");
}
getMyToken(){
  return window.localStorage.getItem("loggedUsers");
}
}
