import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {

  // init datas
  links = [];
  import: boolean;
  uploaded: boolean;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    // get link of data
    this.dataService.get('welcome.json').subscribe(
      (data: any) => {
        this.links = data.inputdatas;
      }
    );
  }

  // redirect to link
  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

  // select option page
  select(name: string) {
    if (name === 'CSV File') {
      this.redirectTo('upload-csv');
    }
  }

}
