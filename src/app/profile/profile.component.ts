import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from './profile.service';
import {User} from '../login/user.model';
import {NgForm} from '@angular/forms';
import {NotificationService} from '../notification/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  user: User;
  editMode = false;

  constructor(private profileService: ProfileService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') === 'client')
      this.profileService.getClientProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = localStorage.getItem('user');
        }
      );
    if (localStorage.getItem('user') === 'driver')
      this.profileService.getDriverProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = localStorage.getItem('user');
          this.profileService.getCorpName(this.user.corporationId).subscribe((name: string) => {
            this.user.corpName = name['name'];
          });
        }
      );
    if (localStorage.getItem('user') === 'corporation')
      this.profileService.getCorporationProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = localStorage.getItem('user');
        }
      );
  }

  onEdit() {
    this.editMode = true;
  }

  onSubmit() {
    if (this.user.role === 'corporation') {
      this.profileService.updateCorpProfile(this.user.id, this.form.value.name).subscribe(res =>
          this.notificationService.success('Profile updated successfully!'),
        (error) => this.notificationService.error(error)
      );
    }

    if (this.user.role === 'client') {
      this.profileService.updateClientProfile(this.user.id, this.form.value.name, this.form.value.surname).subscribe(res =>
          this.notificationService.success('Profile updated successfully!'),
        (error) => this.notificationService.error(error)
      );
    }

    if (this.user.role === 'driver') {
      this.profileService.updateDriverProfile(this.user.id, this.form.value.name, this.form.value.surname).subscribe(res =>
          this.notificationService.success('Profile updated successfully!'),
        (error) => this.notificationService.error(error)
      );
    }

    this.form.reset();
  }

  onCancel() {
    this.editMode = false;
  }
}
