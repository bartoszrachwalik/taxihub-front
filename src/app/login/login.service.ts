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

  logout() {
    localStorage.removeItem('user');
  }

  checkRole(user) {
    this.setUser(user.name);
    console.log(user.authorities[0].authority);
      if (user.authorities[0].authority === 'CLIENT') {

        return this.router.navigate(['/client']);
      }
      if (user.authorities[1].authority === 'DRIVER') {
        return this.router.navigate(['/driver']);
      }
      if (user.authorities[2].authority === 'CORPORATION') {
        return this.router.navigate(['/corporation']);
      } else {
        return this.router.navigate(['/login']);
      }
  }
}


