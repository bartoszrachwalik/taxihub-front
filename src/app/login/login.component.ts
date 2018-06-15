import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import * as Rx from 'rxjs/Observable';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService,
              private loginService: LoginService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  onLogin(login: string, password: string) {
    Rx.Observable.fromPromise(this.service.checkAuth(login, password))
      .flatMap(() => this.getUserInfo())
      .subscribe((user) => this.loginService.checkRole(user));

    return false;
  }

  getUserInfo(): Observable<any> {
    return this.http.get('https://taxihub-backend.herokuapp.com/me');
  }
}
