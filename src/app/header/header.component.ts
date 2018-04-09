import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: string;

  constructor(private service: LoginService, private router: Router) {
    this.user = service.getUser();
  }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
