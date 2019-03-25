import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.scss']
})
export class ComputerDetailComponent implements OnInit {

  isData: any;
  constructor() { }

  ngOnInit() {
    this.isData = JSON.parse(localStorage.getItem('computer-detail'));
  }

}
