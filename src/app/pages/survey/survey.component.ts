import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

class Question {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveyComponent implements OnInit {

  starNumber = 2;
  constructor() { }

  ngOnInit() {
  }

  fnStar(idx: number) {
    this.starNumber = idx;
  }

}
