import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilComponent implements OnInit {

  user: { name: string, mail: string, password: string }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      name: this.route.snapshot.params['name'],
      mail: this.route.snapshot.params['mail'],
      password: this.route.snapshot.params['password']
    };
  }

}
