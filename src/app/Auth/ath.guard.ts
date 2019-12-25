import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , UrlTree} from '@angular/router';
import { Authentication } from './auth.service';
import { User } from '../Models/User';
import { take } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{

constructor(private router:Router, private auth : Authentication){
}

canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean | Promise<boolean> | Observable<boolean | UrlTree>{
  return this.auth.User1.pipe(map(user => {
  console.log("Inside can activate method"+JSON.stringify(user));
  const isAuth = !!user;
  console.log("Is Auth is "+isAuth);
  if (isAuth){
    return true;
  }
  return this.router.createUrlTree(['/login']);
}))

}
}