import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private client = 'client';
  private driver = 'driver';
  private corporation = 'corporation';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {
    console.log(login.value);
    if (login.value === 'client') {
      this.router.navigate(['/main/client']);
      return;
    }
    if (login.value === 'driver') {
      this.router.navigate(['/main/driver']);
      return;
    }
    if (login.value === 'corporation') {
      this.router.navigate(['/main/corporation']);
    } else {
      // todo
      // it does not redirect to login page when empty, random or 'login' input
      this.router.navigate(['/login']);
    }
  }
}
