import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  private userIdUrl = 'https://taxihub-backend.herokuapp.com/id';

  constructor(private router: Router, private http: HttpClient) {
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
    localStorage.removeItem('id');
  }

  checkRole(user) {
    if (user.principal.clientId !== null) {
      this.setUserEmail(user.name);
      this.setUser('client');
      this.getId();
      return this.router.navigate(['/client']);
    }
    if (user.principal.driverId !== null) {
      this.setUserEmail(user.name);
      this.setUser('driver');
      this.getId();
      return this.router.navigate(['/driver']);
    }
    if (user.principal.corporationId !== null) {
      this.setUserEmail(user.name);
      this.setUser('corporation');
      this.getId();

      return this.router.navigate(['/corporation']);
    } else {
      return this.router.navigate(['/login']);
    }
  }

  private getId() {
    const email = localStorage.getItem('userEmail');
    const role = localStorage.getItem('user');
    this.http.post(this.userIdUrl, {email, role}).subscribe((id: number) => {
      localStorage.setItem('id', id.toString());
    });
  }

}
