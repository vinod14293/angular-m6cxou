import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUp } from '../Services/signUp/signUp.service';
import { SignUpModel } from '../Models/signUp';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: [ './signUp.component.css' ]
})
export class SignUpComponent  {

  signUpModel : SignUpModel;
  error : any;

constructor( private fb : FormBuilder, private signUpService : SignUp, private router : Router){
}

signUpForm = this.fb.group({
  name : [''],
  employId : [''],
  email : [''],
  password : [''],
  confirmPWD : ['']
});

signUp(){
  //console.log(this.signUpForm.value);
  this.signUpService.signUp(this.signUpForm.value).subscribe(
      data => {
        console.log(data);
        //this.isLoading = false;
        this.router.navigate(['/dashBoard']);
      },
      error => {
        this.error = error.error.error.message;
        if(error.error.error.message == 'EMAIL_NOT_FOUND'){
            this.error="Email doesn't exists";
        }
        if(error.error.error.message == 'INVALID_PASSWORD'){
            this.error="Password is wrong";
        }
        
        //this.isLoading = false;
        console.log('error is '+error.error.error.message);
      }
    )
    ;
}

}