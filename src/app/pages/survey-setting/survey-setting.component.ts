import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


class Question {
  name: string;
  rating: number;
}

@Component({
  selector: 'app-survey-setting',
  templateUrl: './survey-setting.component.html',
  styleUrls: ['./survey-setting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SurveySettingComponent implements OnInit {

  // init datas
  questionDatas: any;
  ratingOptions: any;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // onload
    this.onload();
  }

  // redirect to link
  redirectTo(key: string) {
    this.router.navigateByUrl(key);
  }

  // load datas
  onload() {
    this.dataService.get('survey.json').subscribe(
      (datas: any) => {
        this.questionDatas = datas.datas;
        this.ratingOptions = datas.rating_options;
      }
    );
  }

  // fn add question
  addQuestion() {
    const question = new Question();
    this.questionDatas.push(question);
  }

}
