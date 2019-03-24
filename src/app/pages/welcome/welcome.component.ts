import { Component, OnInit } from '@angular/core';
import { DropdownValue } from 'src/app/components/dropdown/dropdown.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  searchBy = 'Computers';
  dropdownName = 'Search by';
  listSearchBy: DropdownValue[];

  links = [];
  inputDatas = [];

  import: boolean;
  uploaded: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('welcome.json').subscribe(
      (data: any) => {
        this.links = data.links;
        this.listSearchBy = data.listsearch;
      }
    );
  }

  action(e): void {
  }

  select(key) {
    if (key === 'Input Data') {
      this.dataService.get('welcome.json').subscribe(
        (data: any) => {
          this.inputDatas = data.inputdatas;
          this.import = true;
        }
      );
    } else if (key === 'CSV File') {
      this.uploaded = true;
    }
  }

  redirectTo() {
    this.import = false;
    this.uploaded = false;
  }

}
