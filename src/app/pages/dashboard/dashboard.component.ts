import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { config } from 'src/app/core/config';
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

  listSortBy = [];
  projectDatas = [];
  userData: any[];

  tableHeight = document.documentElement.clientHeight - config.height_top_dashboard + 'px';

  dropdownName = 'Sort by';
  sortBy = 'user_name';
  sortByName = 'User Name';

  @ViewChild('dt') primeTable: Table;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.userData = [
      { field: 'user_id', header: 'User ID', width: 125 },
      { field: 'user_name', header: 'User Name', width: 170 },
      { field: 'vip', header: 'Vip', width: 70 },
      { field: 'support_language', header: 'Support Language', width: 150},
      { field: 'site_code', header: 'Site Code', width: 110 },
      { field: 'building', header: 'Building', width: 110 },
      { field: 'floor', header: 'Floor', width: 60 },
      { field: 'desk_information', header: 'Desk Information', width: 180 },
      { field: 'street_address', header: 'Street Address', width: 250 },
      { field: 'city', header: 'City', width: 150 },
      { field: 'state', header: 'State', width: 150 },
      { field: 'department', header: 'Department', width: 150 },
      { field: 'email_address', header: 'Email Address', width: 250 }
    ];

    this.dataService.get('projects.json').subscribe(
      (data: any) => {
        this.projectDatas = data;
      }
    );
  }

  action(key: string): void {
    this.sortBy = key;
  }

  redirectTo(key: string) {
    this. router.navigateByUrl(key);
  }

  publish(select: number) {
    if (select > 0) {
      this.redirectTo('dashboard');
    }
  }

}
