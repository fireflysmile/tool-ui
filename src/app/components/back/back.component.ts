import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent implements OnInit {

  @Output() routerName: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  redirectTo() {
    this.routerName.emit();
  }

}
