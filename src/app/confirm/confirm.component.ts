import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DriverService} from '../driver/driver.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  token: string;

  constructor(private route: ActivatedRoute, private driverService: DriverService) {
  }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  sendPassword(password: string) {
    this.driverService.verifyPassword(password, this.token);
  }
}
