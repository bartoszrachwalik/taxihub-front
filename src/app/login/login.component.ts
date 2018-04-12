import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
import {AuthService} from './auth.service';
import {NotificationService} from '.././notification/notification.service';
import {User} from './user.model';
import * as Rx from 'rxjs/Observable';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private service: AuthService,
              private loginService: LoginService,
              private notification: NotificationService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  onLogin(login: string, password: string) {
    Rx.Observable.fromPromise(this.service.checkAuth(login, password))
      .flatMap(() => this.getUserInfo())
      .subscribe(() => this.loginService.checkRole(login));

    return false;
  }

  getUserInfo(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
