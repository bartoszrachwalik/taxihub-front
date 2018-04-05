import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {LoginServiceService} from './services/login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private  authService: LoginServiceService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
