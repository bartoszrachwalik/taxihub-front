import {Component, OnInit} from '@angular/core';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: string;

  constructor(service: LoginServiceService) {
    this.user = service.getUser();
  }

  ngOnInit() {
  }

}
