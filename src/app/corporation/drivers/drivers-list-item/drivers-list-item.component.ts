import {Component, Input, OnInit} from '@angular/core';
import {Driver} from '../../../model/driver.model';

@Component({
  selector: 'app-drivers-list-item',
  templateUrl: './drivers-list-item.component.html',
  styleUrls: ['./drivers-list-item.component.css']
})
export class DriversListItemComponent implements OnInit {
  @Input() driver: Driver;

  constructor() {
  }

  ngOnInit() {
  }
}
