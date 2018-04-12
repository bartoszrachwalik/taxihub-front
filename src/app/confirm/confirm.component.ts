import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DriverService} from '../driver/driver.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DriverService) { }
  token: string;

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  sendPassword(password: string) {
    this.service.verifyPassword(password, this.token);
  }
}
