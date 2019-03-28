import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadCsvComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

  fnSelectFile(e: any) {
    if (e) {
      setTimeout(() => {
        this.redirectTo('onboard');
      }, 1000);
    }
  }

}
