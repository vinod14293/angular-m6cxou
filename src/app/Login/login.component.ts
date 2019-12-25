import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Authentication  } from '../Auth/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent  {

  error : any;

  isLoading = false;

  constructor(private fb : FormBuilder, private login : Authentication, private router : Router){
  }


//form builder for form construction
  loginForm = this.fb.group({
    email : [''],
    password : ['']
  });

  onSubmit(){
    this.isLoading = true;
    console.log(this.loginForm.value);
    this.login.authenticate(this.loginForm.value).subscribe(
      data => {
        console.log("respone recieved "+data);
        this.isLoading = false;
        this.router.navigate(['/dashBoard']);
      },
      error => {
        console.log("Error logged in login component"+this.error);
        this.error = error.error.error.message;
        if(error.error.error.message == 'EMAIL_NOT_FOUND'){
            this.error="Email doesn't exists";
        }
        if(error.error.error.message == 'INVALID_PASSWORD'){
            this.error="Password is wrong";
        }
        
        this.isLoading = false;
        //console.log('error is '+error.error.error.message);
      }
    )
    ;
  }
}