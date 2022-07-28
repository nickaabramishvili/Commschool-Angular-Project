import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisteredUserCheckService } from '../services/registered-user-check.service';

@Injectable({
  providedIn: 'root',
})
export class CanAccessToCustomersGuard implements CanActivate {
  constructor(
    private registeredUserCheckService: RegisteredUserCheckService,
    private router: Router
  ) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.registeredUserCheckService.userIsLogged) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
