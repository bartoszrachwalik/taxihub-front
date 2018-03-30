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
      this.router.navigate(['/client']);
      return;
    }
    if (login.value === 'driver') {
      this.router.navigate(['/driver']);
      return;
    }
    if (login.value === 'corporation') {
      this.router.navigate(['/corporation']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
