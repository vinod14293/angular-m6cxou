import { Injectable } from '@angular/core';
import { SignUp } from '../Models/signUp';
import { User } from '../Models/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthResponseData } from '../Models/AuthResponseData';
import { tap,catchError,take  } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { throwError,Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class Authentication{
User1 = new BehaviorSubject<User>(null);

constructor(private http : HttpClient){
}

login(){

}

logout(){

}

autoLogin(){

}

autoLogOut(){

}

authenticate(login : SignUp){
console.log('Entered inside authentication method');
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdILz7MvoRpo_LfNQVq1SvWbjMYBGEo38',{
  email : login.email,
  password : login.password,
  returnSecureToken : true
}).pipe(catchError(this.handleError),tap(data=>{
  const expirationDate = new Date( new Date().getTime() +  +data.expiresIn*1000 );
  const user = new User(data.email, data.localId, data.idToken, expirationDate);
  console.log("user afte construction "+JSON.stringify(user));
  this.User1.next(user);
}));

}

private handleError(errorRes : HttpErrorResponse){
  console.log(errorRes);
return throwError(errorRes);
}

}