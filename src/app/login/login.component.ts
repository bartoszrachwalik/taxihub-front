import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client = 'client';
  driver = 'driver';
  corporation = 'corporation';

  constructor(private router: Router, private service: LoginService) {
  }

  ngOnInit() {
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {
    console.log(login.value);
    if (login.value === this.client) {
      this.service.setUser(login.value);
      this.router.navigate(['/client']);
      return false;
    }
    if (login.value === this.driver) {
      this.service.setUser(login.value);
      this.router.navigate(['/driver']);
      return false;
    }
    if (login.value === this.corporation) {
      this.service.setUser(login.value);
      this.router.navigate(['/corporation']);
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
