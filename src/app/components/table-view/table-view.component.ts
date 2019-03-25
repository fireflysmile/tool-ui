import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() datas: any;
  @Input() sortBy: string;
  @Input() sortByName: string;

  @Input() select: boolean;

  selected: any;
  isFilter: boolean;
  dropdownName = 'Sort by';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  action(key: string): void {
    this.sortBy = key;
  }

  redirectTo(key: string) {
    this. router.navigateByUrl(key);
  }

  fnFilter() {
    this.isFilter = true;
  }

  fnCloseFilter() {
    this.isFilter = false;
  }

}
