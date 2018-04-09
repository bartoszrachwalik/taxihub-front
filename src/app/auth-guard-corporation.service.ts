import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {LoginServiceService} from './services/login-service.service';

@Injectable()
export class AuthGuardCorporation implements CanActivate {

  constructor(private  authService: LoginServiceService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getUser() === 'corporation') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
