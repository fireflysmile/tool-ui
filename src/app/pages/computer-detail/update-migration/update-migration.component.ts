import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-migration',
  templateUrl: './update-migration.component.html',
  styleUrls: ['./update-migration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateMigrationComponent implements OnInit {

  isData: any;
  datas: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isData = JSON.parse(localStorage.getItem('computer-detail'));

    this.dataService.get('migration.json').subscribe(
      (datas: any) => {
        this.datas = datas;
      }
    );
  }
}
