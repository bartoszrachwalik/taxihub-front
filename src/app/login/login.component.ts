import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement) {
    if (login.value === 'xxx' &&
      password.value === 'xxx') {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
