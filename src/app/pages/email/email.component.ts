import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  text: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

}
