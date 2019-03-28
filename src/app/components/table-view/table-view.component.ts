import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  // Input and out
  @Input() datas: any;
  @Input() sortBy: string;
  @Input() sortByName: string;
  @Input() select: boolean;
  @Output() viewDetail: EventEmitter<any> = new EventEmitter();

  // init data
  selected: any;
  isFilter: boolean;
  dropdownName = 'Sort by';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  // select dropdown
  action(key: string): void {
    this.sortBy = key;
  }

  // redirect to router
  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

  // open filter
  fnFilter() {
    this.isFilter = true;
  }

  // close filter
  fnCloseFilter() {
    this.isFilter = false;
  }

  // view detail row table
  viewData(isData: any) {
    this.viewDetail.emit(isData);
  }

}
