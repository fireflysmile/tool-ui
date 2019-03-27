import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-readiness',
  templateUrl: './readiness.component.html',
  styleUrls: ['./readiness.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReadinessComponent implements OnInit {

  readinessData: any;
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.onload();
  }

  onload() {
    this.dataService.get('readiness.json').subscribe(
      (datas) => {
        this.readinessData = datas;
      }
    );
  }

}
