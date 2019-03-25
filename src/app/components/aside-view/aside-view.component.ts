import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-view',
  templateUrl: './aside-view.component.html',
  styleUrls: ['./aside-view.component.scss']
})
export class AsideViewComponent implements OnInit {

  search: boolean;
  constructor() { }

  ngOnInit() {
  }

  fnSearch() {
    this.search = !this.search;
  }

  fnCloseSearch() {
    this.search = false;
  }

}
