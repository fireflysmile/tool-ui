import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlanningComponent implements OnInit {

  // init datas
  events: any[];
  optionsSelect: any;
  limitOptions: any;
  startDate = '';
  endDate = '';
  options: any;
  roCalender: any;

  constructor(private dataService: DataService) {
    // format calendar popup
    this.roCalender = {
      firstDayOfWeek: 1,
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
    // options full calendar
    this.options = {
      defaultDate: '2019-03-26',
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      firstDay: 1,
      eventLimit: true,
      columnHeaderFormat: { weekday: 'long' }
    };

    // onload data
    this.onload();
  }

  // fn load data
  onload() {
    this.dataService.get('planning.json').subscribe(
      (datas: any) => {
        this.events = datas.events;
        this.optionsSelect = datas.options;
        this.limitOptions = datas.limit_options;
      }
    );
  }

}
