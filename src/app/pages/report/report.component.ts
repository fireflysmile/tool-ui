import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import 'chartjs-plugin-doughnutlabel';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportComponent implements OnInit {

  selectedBy = '';
  selectedType = '';
  startDate = '';
  andDate = '';
  selectedMigration = '';
  isType: boolean;
  isDuration: boolean;

  reportConfig: any;

  devicesChart: any;
  devicesName: string;
  devicesSum: number;
  optionsDevice: any;


  migrationChart: any;
  migrationName: string;
  migrationSum: number;
  optionsMigration: any;

  profileChart: any;
  profileName: string;
  profileSum: number;
  optionsProfile: any;

  siteMigration: any;
  siteMigrationName: string;
  siteMigrationOptions: any;

  plannedMigrations: any;
  plannedMigrationName: string;
  plannedMigrationOptions: any;

  roCalender: any;

  constructor(private dataService: DataService) {
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
    this.onload();
  }

  viewType() {
    if (this.selectedBy !== '' && this.selectedType !== '') {
      this.isType = true;
      this.chartLoad();
    }
  }

  viewDuration() {
    if (this.startDate !== '' && this.selectedMigration !== '') {
      this.isDuration = true;
      this.chartLoad();
    }
  }

  onload() {
    this.dataService.get('reports.json').subscribe(
      (datas: any) => {
        this.reportConfig = datas.config;
      }
    );
  }

  chartLoad() {
    this.dataService.get('reports.json').subscribe(
      (datas: any) => {

        // devices sum
        this.devicesChart = datas.devices;
        this.devicesName = this.devicesChart.name;
        this.devicesSum = this.devicesChart.datasets[0].data.reduce((a, b) => a + b, 0);

        // Migration sum
        this.migrationChart = datas.migrations;
        this.migrationName = this.migrationChart.name;
        this.migrationSum = this.migrationChart.datasets[0].data.reduce((a, b) => a + b, 0);

        // Profile sum
        this.profileChart = datas.profiles;
        this.profileName = this.profileChart.name;
        this.profileSum = this.profileChart.datasets[0].data.reduce((a, b) => a + b, 0);

        this.siteMigration = datas.migrations_site;
        this.siteMigrationName = this.siteMigration.name;

        this.plannedMigrations = datas.planned_migrations;
        this.plannedMigrationName = this.plannedMigrations.name;

        this.onloadOption();

      }
    );
  }

  onloadOption() {
    this.optionsDevice = {
      legend: {
          position: 'bottom',
          display: true,
          labels: {
            fontColor: 'black',
            fontSize: 12,
            boxWidth: 10,
            usePointStyle: true,
          }
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: this.devicesSum,
              fonFamily: 'ProximaNova',
              font: {
                size: '24'
              },
              color: '#333333'
            },
            {
              text: this.devicesName,
              fonFamily: 'ProximaNova',
              font: {
                size: '15'
              },
              color: '#999999'
            }
          ]
        }
      },
      cutoutPercentage: 80,
    };

    this.optionsMigration = {
      legend: {
          position: 'bottom',
          display: true,
          labels: {
            fontColor: 'black',
            fontSize: 12,
            boxWidth: 10,
            usePointStyle: true,
          }
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: this.migrationSum,
              fonFamily: 'ProximaNova',
              font: {
                size: '24'
              },
              color: '#333333'
            },
            {
              text: this.migrationName,
              fonFamily: 'ProximaNova',
              font: {
                size: '15'
              },
              color: '#999999'
            }
          ]
        }
      },
      cutoutPercentage: 80,
    };

    this.optionsProfile = {
      legend: {
          position: 'bottom',
          display: true,
          labels: {
            fontColor: 'black',
            fontSize: 12,
            boxWidth: 10,
            usePointStyle: true,
          }
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: this.profileSum,
              fonFamily: 'ProximaNova',
              font: {
                size: '24'
              },
              color: '#333333'
            },
            {
              text: this.profileName,
              fonFamily: 'ProximaNova',
              font: {
                size: '15'
              },
              color: '#999999'
            }
          ]
        }
      },
      cutoutPercentage: 80,
    };

    this.siteMigrationOptions = {
      legend: {
        position: 'bottom',
        display: true,
        labels: {
          fontColor: 'black',
          fontSize: 12,
          boxWidth: 6,
          usePointStyle: true,
        }
      },
      scales: {
        xAxes: [{
          display: false,
          stacked: true
        }],
        yAxes: [{
          gridLines: {
            drawBorder: false,
              display: false
          },
          position: 'right',
          barThickness: 16,
          maxBarThickness: 20,
          stacked: true
        }]
      }
    };

    this.plannedMigrationOptions = {
      legend: {
        position: 'top',
        display: true,
        fullWidth: true,
        align: 'end',
        labels: {
          fontColor: 'black',
          fontSize: 12,
          boxWidth: 6,
          usePointStyle: true
        }
      },
      scales: {
        xAxes: [{
          barThickness: 16,
          maxBarThickness: 10,
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          display: false
        }]
      }
    };
  }

}
