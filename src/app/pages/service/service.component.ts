import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceComponent implements OnInit {

  // init datas
  applications: any;
  applicationOptions: any;

  computerList: any;
  computer = '';
  departmentList: any;
  department = '';
  locationList: any;
  location = '';
  mirgationDate = null;
  roCalender: any;

  datePlan: any;

  constructor(private dataService: DataService) {
    // calendar config
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

  }

  ngOnInit() {
    // onload
    this.onload();
  }

  onload() {
    this.dataService.get('self-services.json').subscribe(
      (datas: any) => {
        this.computerList = datas.computer_list;
        this.departmentList = datas.department_list;
        this.locationList = datas.location_list;
        this.datePlan = datas.date_plan;
        this.applications = datas.applications;
        this.applicationOptions = datas.application_options;
      }
    );
  }

}
