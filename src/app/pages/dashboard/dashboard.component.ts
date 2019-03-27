import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { widthHeight } from 'src/app/core/widthHeight';
import { Table } from 'primeng/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  getHeight: number;
  tabHeight: string;

  selectedTab: number;

  users: any;
  usersSortBy = 'user_name';
  usersSortByName = 'User Name';

  aplications: any;
  aplicationsSortBy = 'aptication_name';
  aplicationsSortByName = 'Aptication Name';

  computers: any;
  computersSortBy = 'computer_name';
  computersSortByName = 'Computer Name';

  departments: any;
  departmentsSortBy = 'department_name';
  departmentsSortByName = 'Department Name';


  dropdownName = 'Sort by';

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.getHeight = document.documentElement.clientHeight - widthHeight.height_top_dashboard;
    if (this.getHeight > widthHeight.min_table) {
      this.tabHeight = this.getHeight + 'px';
    } else {
      this.tabHeight = widthHeight.min_table + 'px';
    }

    this.onload();

  }

  onload() {
    this.dataService.get('users.json').subscribe(
      (datas: any) => {
        this.users = datas;
      }
    );
    this.dataService.get('aptications.json').subscribe(
      (datas: any) => {
        this.aplications = datas;
      }
    );
    this.dataService.get('computers.json').subscribe(
      (datas: any) => {
        this.computers = datas;
      }
    );
    this.dataService.get('departments.json').subscribe(
      (datas: any) => {
        this.departments = datas;
      }
    );
  }

  redirectTo(key: string) {
    this. router.navigateByUrl(key);
  }

  fnViewDetail(isData: any, page: string) {
    localStorage.setItem(page, JSON.stringify(isData));

    this.router.navigateByUrl(page);
  }

  onTabChange(event) {
      this.activateTab(event.index);
  }

  activateTab(tabNumber) {
      this.selectedTab = tabNumber;
  }

}
