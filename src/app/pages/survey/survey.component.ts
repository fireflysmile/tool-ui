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

  questionDatas: any;
  ratingOptions: any;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.onload();
  }

  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

  onload() {
    this.dataService.get('survey.json').subscribe(
      (datas: any) => {
        this.questionDatas = datas.datas;
        this.ratingOptions = datas.rating_options;
      }
    );
  }

  addQuestion() {
    const question = new Question();
    this.questionDatas.push(question);
  }

}
