import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent,HttpResponse ,HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap,take, exhaustMap } from 'rxjs/operators';
import { Authentication } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

constructor(private auth : Authentication){
  this.auth.User1.subscribe(data =>
  {
      console.log("user extracted from auth interceptor constructor "+JSON.stringify(data));
  })
}

intercept( req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{

return this.auth.User1.pipe(
  take(1),
  exhaustMap(User1 => {
    console.log("user logged here in interceptor "+JSON.stringify(User1));
    const nextReq = req.clone( {params: new HttpParams().set('auth','vinod')});
  return next.handle(nextReq); 
  }))

}

}