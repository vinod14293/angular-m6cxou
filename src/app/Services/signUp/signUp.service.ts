import { Injectable } from '@angular/core';
import { SignUpModel } from '../Models/signUp';
import { HttpClient } from '@angular/common/http'

@Injectable({providedIn : 'root'})
export class SignUp{
  constructor(private http : HttpClient){
  }

  signUp(signUpMo : SignUpModel){
    console.log('sign up for the user has been completed'+signUpMo);
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38',{
  email : signUpMo.email,
  password : signUpMo.password,
  returnSecureToken : true
});
  }

}