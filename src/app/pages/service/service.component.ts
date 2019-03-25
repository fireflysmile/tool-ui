import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
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
