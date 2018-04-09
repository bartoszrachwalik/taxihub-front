import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {
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
}
