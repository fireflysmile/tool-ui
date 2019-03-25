import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  isData: any;
  constructor() { }

  ngOnInit() {
    this.isData = JSON.parse(localStorage.getItem('user-detail'));
  }

}
