import {Injectable} from '@angular/core';

@Injectable()
export class LoginServiceService {

  user: string;

  constructor() {
  }

  setUser(user: string) {
    this.user = user;
  }

  getUser(): string {
    return this.user;
  }

}
