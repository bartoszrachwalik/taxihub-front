import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../services/login-service.service';
import {AuthService} from './auth.service';
import {TokenInterceptor} from './token.interceptor';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = false;

  constructor(
    private router: Router,
    private service: AuthService,
    private loginService: LoginServiceService,
    private notification: NotificationService) {
  }

  ngOnInit() {
  }

  onLogin(login: string, password: string) {
    this.service.checkAuth(login, password)
      .then(() => this.checkRole(login))
      .catch(() => this.notification.error('Wrong login or password'));
    return false;
  }

  checkRole(login: string) {
    {
      if (login === 'client@client.com') {
        console.log(login);
        this.loginService.setUser(login);
        return this.router.navigate(['/client']);
      }
      if (login === 'driver@driver.com') {
        console.log(login);
        this.loginService.setUser(login);
        return this.router.navigate(['/driver']);
      }
      if (login === 'corporation@corporation.com') {
        console.log(login);
        this.loginService.setUser(login);
        return this.router.navigate(['/corporation']);
      } else {
        return this.router.navigate(['/login']);
      }
    }
  }
}
