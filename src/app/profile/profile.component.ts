import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from './profile.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../login/user.model';
import {NgForm} from '@angular/forms';
import {NotificationService} from '../notification/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  user: User;
  editMode = false;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private notificationService: NotificationService) {
  }

  ngOnInit() {
    if (this.route.snapshot.data['profile'] === 'client')
      this.profileService.getClientProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = this.route.snapshot.data['profile'];
        }
      );
    if (this.route.snapshot.data['profile'] === 'driver')
      this.profileService.getDriverProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = this.route.snapshot.data['profile'];
          this.profileService.getCorpName(this.user.corporationId).subscribe((name: string) => {
            this.user.corpName = name;
          });
        }
      );
    if (this.route.snapshot.data['profile'] === 'corporation')
      this.profileService.getCorporationProfile().subscribe((data: User) => {
          this.user = data;
          this.user.role = this.route.snapshot.data['profile'];
        }
      );
  }

  onEdit() {
    this.editMode = true;
  }

  onSubmit() {
    if (this.user.role === 'corporation') {
      this.profileService.updateCorpProfile(this.user.id, this.form.value.name).subscribe(res =>
        this.notificationService.success('Profile updated successfully!')
      );
    }

    if (this.user.role === 'client') {
      this.profileService.updateClientProfile(this.user.id, this.form.value.name, this.form.value.surname).subscribe(res =>
        this.notificationService.success('Profile updated successfully!')
      );
    }

    if (this.user.role === 'driver') {
      this.profileService.updateDriverProfile(this.user.id, this.form.value.name, this.form.value.surname).subscribe(res =>
        this.notificationService.success('Profile updated successfully!')
      );
    }

    this.form.reset();
  }
}
