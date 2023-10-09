import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Route, Router } from '@angular/router';
 declare var $:any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  isUsernameAvail=false;
	msg:string;
  constructor( public Userser:UsersService, public router:Router) { }

  ngOnInit(): void {
    $('.toggle').click(()=>{
      // Switches the Icon
      $(this).children('i').toggleClass('fa-pencil');
      // Switches the forms  
      $('.form').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: "toggle"
      }, "slow");
    });
    this.loginForm= new FormGroup({
      'Username': new FormControl(null,Validators.required),
      'Password': new FormControl(null,[Validators.required,Validators.minLength(4)]),
    })
  }

  get userNameCntrl(){
    return this.loginForm.get('Username')
    }
    get userpasswordCntrl(){
    return this.loginForm.get('Password')
    }

  doLogin(){
    //console.log(this.loginForm.value);
    this.Userser.doLogin(this.loginForm.value).subscribe({
      next:(data:any)=>{
        if(data.length>0){
          console.log(data);
          window.localStorage.setItem("loggedUsers",data);
          this.router.navigateByUrl('/');
          this.loginForm.reset();
        }else{
          this.msg="Invalid Username/Password";
        }
      },
      error:(error:any)=>{
          console.log(error);
      }
    })
    }
  
    doRegistration(form:NgForm){
      //console.log(this.regForm.value);
    this.Userser.userRegistration(form.value).subscribe({
      next:(data:any)=>{
               console.log(data);
         this.msg=data;
         form.reset();
      },error:(error:any)=>{
             console.log(error);
      }
    })
    }
    userNamecheck(username:any){
     this.Userser.userNameCheckavail(username).subscribe({
    next:(data:any)=>{
      if(data===0){
        this.isUsernameAvail=true;
        console.log(data);
      }else{
        this.isUsernameAvail=false;
      }
         
    },
    error:(error:any)=>{
      console.log(error);
    }
     })
    }

}
