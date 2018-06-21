import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverService} from '../driver/driver.service';
import {NotificationService} from '../notification/notification.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  token: string;

  constructor(private route: ActivatedRoute,
              private driverService: DriverService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
  }

  sendPassword(password: string) {
    this.driverService.verifyPassword(password, this.token).subscribe(
      () => {
        this.notificationService.success('Password saved!');
        this.router.navigate(['../../']);
      },
      (error) => this.notificationService.error(error));
  }
}
