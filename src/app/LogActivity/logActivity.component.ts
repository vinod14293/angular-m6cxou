import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUp } from '../Services/signUp/signUp.service';
import { SignUpModel } from '../Models/signUp';
import { Router } from '@angular/router';
import { Authentication } from '../Auth/auth.service';

@Component({
  selector: 'app-logActivity',
  templateUrl: './logActivity.component.html',
  styleUrls: [ './logActivity.component.css' ]
})
export class LogActivity implements OnInit {

  welcomeMessage : string = "";
  signUpModel : SignUpModel;
  error : any;

constructor( private fb : FormBuilder, private signUpService : SignUp, private router : Router, private auth: Authentication){
}

  ngOnInit() {
    this.auth.User1.subscribe( data => {
      console.log("getting user name for dashboard"+data.email)
      this.welcomeMessage = "Welcome "+data.email;
    })
 
  }

signUpForm = this.fb.group({
  activityCategory : [''],
  enterDate : [''],
  description : [''],
  duration : [''],
});

logActivity(){
    console.log(this.signUpForm.value);
}

}