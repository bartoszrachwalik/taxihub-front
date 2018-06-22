import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DriverService} from '../driver/driver.service';
import {NotificationService} from '../notification/notification.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit, DoCheck {
  passwordConfirmed = false;
  confirmForm: FormGroup;
  token: string;

  constructor(private route: ActivatedRoute,
              private driverService: DriverService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  ngOnInit() {
    this.confirmForm = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'confirm': new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.token = this.route.snapshot.params['token'];
  }

  ngDoCheck() {
    this.passwordConfirmed = this.confirmForm.get('password').value === this.confirmForm.get('confirm').value;
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
