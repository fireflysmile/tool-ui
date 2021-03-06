import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { widthHeight } from 'src/app/core/widthHeight';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent implements OnInit {

  // init datas
  logDatas: any;
  receipientsDatas: any;
  templatesDatas: any;

  // email config
  mailTypeOptions: any;
  mailServerAddress: string;
  port: string;
  mailServerType: string;
  senderName: string;
  username: string;
  password: string;
  senderEmail: string;

  // Schedule config
  projectChecked = true;
  scheduleConfig: any;
  projectName: string;
  testEmail: string;

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
    this.dataService.get('email.json').subscribe(
      (datas: any) => {

        // data other
        this.logDatas = datas.logs;
        this.receipientsDatas = datas.receipients;
        this.templatesDatas = datas.templates;

        // email
        this.mailServerAddress = datas.email_config.mail_server_address;
        this.port = datas.email_config.port;
        this.mailServerType = datas.email_config.mail_server_type;
        this.senderName = datas.email_config.sender_name;
        this.username = datas.email_config.authentication_type.username;
        this.password = datas.email_config.authentication_type.password;
        this.senderEmail = datas.email_config.authentication_type.sender_email;
        this.mailTypeOptions = datas.email_config.mail_type_options;

        // schedule config
        this.scheduleConfig = datas.schedule_config;
        this.projectName = datas.schedule_config.project_name;
        this.testEmail = datas.schedule_config.test_email;
      }
    );
  }

  // Delete Receipient
  deleteReceipient(idx: number) {
    this.receipientsDatas.splice(idx, 1);
  }

  // Delete Templates
  deleteTemplates(idx: number) {
    this.templatesDatas.splice(idx, 1);
  }

}
