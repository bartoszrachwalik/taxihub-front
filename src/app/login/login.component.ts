import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {
    if (login.value === 'xxx' &&
      password.value === 'xxx') {
      console.log('online');
    }
  }
}
