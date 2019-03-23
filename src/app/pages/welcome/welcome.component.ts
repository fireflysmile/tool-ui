import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  links = [
    {
      text: 'Input Data',
      icon: 'input-data'
    },
    {
      text: 'Onboard to Project Data',
      icon: 'onboard'
    },
    {
      text: 'Dashboard',
      icon: 'dashboard'
    },
    {
      text: 'App Readiness',
      icon: 'readiness'
    },
    {
      text: 'Email Templates',
      icon: 'email'
    },
    {
      text: 'Self Service',
      icon: 'service'
    },
    {
      text: 'Survey',
      icon: 'survey'
    },
    {
      text: 'Report',
      icon: 'report'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
