import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss']
})
export class ApplicationDetailComponent implements OnInit {

  isData: any;
  constructor() { }

  ngOnInit() {
    this.isData = JSON.parse(localStorage.getItem('application-detail'));
  }
}
