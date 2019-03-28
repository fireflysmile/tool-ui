import { Component, OnInit } from '@angular/core';
import { DropdownValue } from 'src/app/components/dropdown/dropdown.component';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // init datas
  searchBy = 'Computers';
  dropdownName = 'Search by';
  listSearchBy: DropdownValue[];
  links = [];


  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    // load datas
    this.dataService.get('welcome.json').subscribe(
      (data: any) => {
        this.links = data.links;
        this.listSearchBy = data.listsearch;
      }
    );
  }

  // select dropdown
  action(e: string): void {
  }

  // redirect to link
  redirectTo(routerName: string) {
    if (routerName) {
      this.router.navigateByUrl(routerName);
    }
  }
}
