import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
      this.router.navigate(['/login']);
    }
  }
}
