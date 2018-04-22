import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router: Router) {
  }

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  getUser(): string {
    return localStorage.getItem('user');
  }

  setUserEmail(userEmail: string) {
    localStorage.setItem('userEmail', userEmail);
  }
  getUserEmail(): string {
    return localStorage.getItem('userEmail');
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('userEmail');
  }

  checkRole(user) {
      if (user.principal.clientId !== null) {
        this.setUserEmail(user.name);
        this.setUser('client');
        return this.router.navigate(['/client']);
      }
      if (user.principal.driverId !== null) {
        this.setUserEmail(user.name);
        this.setUser('driver');
        return this.router.navigate(['/driver']);
      }
      if (user.principal.corporationId !== null) {
        this.setUserEmail(user.name);
        this.setUser('corporation');
        return this.router.navigate(['/corporation']);
      } else {
        return this.router.navigate(['/login']);
      }
  }
}


