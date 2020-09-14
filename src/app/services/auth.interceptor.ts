import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


export class AuthInterceptor implements HttpInterceptor {
  // really intercept = stream so we can add pipe and all that can use stream

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept request', req)

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'Some NEW AUTH HEADER')
    })
    return next.handle(cloned)


  }
}
