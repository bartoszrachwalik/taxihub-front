import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';

@Injectable()
export class LoginService {

  constructor(private router: Router) {
  }

  user: User;

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  getUser(): string {
    return localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }

  checkRole(login) {
    this.user = this.getMockedData(login);
    this.setUser(this.user.name);
    if (this.user) {
      // this.role = this.user.role;
      if (this.user.role === 'client') {
        return this.router.navigate(['/client']);
      }
      if (this.user.role === 'driver') {
        return this.router.navigate(['/driver']);
      }
      if (this.user.role === 'corporation') {
        return this.router.navigate(['/corporation']);
      } else {
        return this.router.navigate(['/login']);
      }
    }
  }

  getMockedData(login) {
    if (login === 'client@client.com') {
      console.log(login);
      return new User('client@client.com', 'client', 'client');
    }
    if (login === 'driver@driver.com') {
      return new User('driver@driver.com', 'driver', 'driver');
    }
    if (login === 'corporation@corporation.com') {
      return new User('corporation@corporation.com', 'corporation', 'corporation');
    }
  }
}


