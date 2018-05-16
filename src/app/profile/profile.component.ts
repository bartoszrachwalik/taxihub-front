import {Component, OnInit} from '@angular/core';
import {ProfileService} from './profile.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../login/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) {
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

}
