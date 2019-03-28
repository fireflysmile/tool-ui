import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { widthHeight } from 'src/app/core/widthHeight';

@Component({
  selector: 'app-onboard-project',
  templateUrl: './onboard-project.component.html',
  styleUrls: ['./onboard-project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OnboardProjectComponent implements OnInit {

  getHeight: number;
  tabHeight: string;

  projects: string;
  files: string;

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

  browse: boolean;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

    this.getHeight = document.documentElement.clientHeight - (widthHeight.height_top_table + widthHeight.height_bottom_table);
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
    this.router.navigateByUrl(key);
  }

  fnBrowse() {
    this.browse = true;

    this.dataService.get('onboard.json').subscribe(
      (datas: any) => {
        this.projects = datas.projects;
        this.files = datas.files;
      }
    );
  }

  offBrowse(e) {
    this.browse = false;
  }

}
