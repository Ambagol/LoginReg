import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RegisterComponent} from './register/register.component'

@Injectable({
  providedIn: 'root'
})
export class InterlinkService {

  constructor(private _http: HttpClient) { }

  register(user, cb){
    console.log("Registering from service");
    this._http.post('/registerUser', user).subscribe((res)=>{
      console.log("Back in service");
      cb(res)
    })
    
  }

  Login(user,cb){
    console.log("Registering from Login service");
    this._http.post('/loginUser', user).subscribe((res)=>{
      console.log("Back in service");
      cb(res)
    })
  }

  loginpage(xyz){
  
  }
}



