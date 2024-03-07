import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authSevice: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    /* if (this.authSevice.auth.id) {
      return true;
    }
    console.log('Bloqueado por el AuthGuard - CanActivate');
    return false; */
    return this.authSevice.authVerify().pipe(
      tap((isAuthenticaded) => {
        if (!isAuthenticaded) {
          this.router.navigate(['/auth']);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSevice.authVerify().pipe(
      tap((isAuthenticaded) => {
        if (!isAuthenticaded) {
          this.router.navigate(['/auth']);
        }
      })
    );
    /* if (this.authSevice.auth.id) {
      return true;
    }
    console.log('Bloqueado por el AuthGuard - CanLoad');

    return false; */
  }
}
