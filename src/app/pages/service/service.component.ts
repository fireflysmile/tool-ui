import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceComponent implements OnInit {

  computerList = [];
  computer = {};

  departmentList = [];
  department = {};

  locationList = [];
  location = {};

  mirgationDate = null;
  roCalender: any;
  datePlan = [
    {year: 2019, month: 3, day: 1},
    {year: 2019, month: 3, day: 2},
    {year: 2019, month: 3, day: 5},
    {year: 2019, month: 3, day: 7},
    {year: 2019, month: 3, day: 8},
    {year: 2019, month: 3, day: 9},
    {year: 2019, month: 3, day: 12},
    {year: 2019, month: 3, day: 14},
    {year: 2019, month: 3, day: 15},
    {year: 2019, month: 3, day: 17},
    {year: 2019, month: 3, day: 19},
    {year: 2019, month: 3, day: 21},
    {year: 2019, month: 3, day: 22},
    {year: 2019, month: 3, day: 24},
    {year: 2019, month: 3, day: 28},
    {year: 2019, month: 3, day: 29},
  ];
  constructor() {
    this.roCalender = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      monthNames: [ 'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
      monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy'
    };
    this.computerList = [{computer_name: 'hp'}, {computer_name: 'asus'}, {computer_name: 'macbook'}];
    this.computer = {computer_name: 'hp'};

    this.departmentList = [{department_name: 'hp'}, {department_name: 'asus'}, {department_name: 'macbook'}];
    this.department = {department_name: 'hp'};

    this.locationList = [{office_location: 'hp'}, {office_location: 'asus'}, {office_location: 'macbook'}];
    this.location = {office_location: 'hp'};
  }

  ngOnInit() {
  }

}
