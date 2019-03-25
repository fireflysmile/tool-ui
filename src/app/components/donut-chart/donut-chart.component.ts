import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @ViewChild('fill') fill: ElementRef;
  @ViewChild('fill1') fill1: ElementRef;
  @ViewChild('fill2') fill2: ElementRef;
  @ViewChild('fill3') fill3: ElementRef;

  @Input() donutColor: string;
  @Input() insetColor: string;

  @Input() numberData: number;
  percent: number;


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // this.progress = isNaN(Number(eval[0])) ? 0 : Number(eval[0]);

    const rotate = 'rotate(0deg)';
    this.percent = this.numberData * 1.8;

    this.fill.nativeElement.style.transform
    = this.fill1.nativeElement.style.transform
    = this.fill2.nativeElement.style.transform
    = this.fill3.nativeElement.style.transform
    = rotate.replace('0', `${this.percent}`);

  }

}
