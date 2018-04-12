import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.user = loginService.getUser();
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
