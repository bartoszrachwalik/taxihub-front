import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client = 'client';
  driver = 'driver';
  corporation = 'corporation';
  loggedIn = false;

  constructor(private router: Router, private service: LoginServiceService) {
  }

  ngOnInit() {
  }
  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {
    console.log(login.value);
    if (login.value === this.client) {
      this.service.setUser(login.value);
      this.loggedIn = true;
      this.router.navigate(['/main/client']);
      return;
    }
    if (login.value === this.driver) {
      this.service.setUser(login.value);
      this.router.navigate(['/main/driver']);
      return;
    }
    if (login.value === this.corporation) {
      this.service.setUser(login.value);
      this.router.navigate(['/main/corporation']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
