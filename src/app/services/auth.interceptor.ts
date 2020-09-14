import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export class AuthInterceptor implements HttpInterceptor {
  // really intercept = stream so we can add pipe and all that can use stream

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept request', req)

    const cloned = req.clone({
      headers: req.headers.append('Auth', 'Some NEW AUTH HEADER')
    })
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Interceptor response', event)
        }
      })
    )


  }
}
