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
import { Observable, map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    return this.checkUserLoggedIn();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.checkUserLoggedIn();
  }

  private checkUserLoggedIn(): boolean {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';

    if (isUserLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
