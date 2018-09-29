import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : object;
  constructor(private interlink: InterlinkService, private _router: Router) {
    this.user = {
      name: "",
      email: "",
      password: "",
      cpassword: ""
  }
   }

  ngOnInit() {
  }
  register(){
    console.log("registering the component");
    this.interlink.register(this.user, (res)=> {
      if(res== "Success"){
        // console.log("Success it worked");
        this._router.navigate(['dashboard'])
        
      }
    })
    
  }
  loginpage(){
   
   this.interlink.loginpage(
     this._router.navigate(['Login'])
   )

}
}
