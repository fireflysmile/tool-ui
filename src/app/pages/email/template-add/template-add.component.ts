import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-template-add',
  templateUrl: './template-add.component.html',
  styleUrls: ['./template-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateAddComponent implements OnInit {

  attachmentDatas: any;
  templatesOptions: any;
  text: string;

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
    this.dataService.get('email.json').subscribe(
      (datas: any) => {
        this.attachmentDatas = datas.attachments;
        this.templatesOptions = datas.template_options;
      }
    );
  }

  onContentChanged(quill) {
    console.log('quill content is changed!', quill);
  }

  initData(quill) {
    console.log('init', quill);
  }

  deleteAttachment(idx: number) {
    this.attachmentDatas.splice(idx, 1);
  }

}
