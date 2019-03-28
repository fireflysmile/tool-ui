import 'core-js/shim';
import { Component, OnInit, AfterViewInit, NgZone, OnDestroy, Input } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() val: number;
  @Input() beginVal: number;
  @Input() endVal: number;

  private chart: am4charts.GaugeChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    console.log(this.val, this.beginVal, this.endVal);
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.GaugeChart);

      chart.innerRadius = am4core.percent(80);
      chart.startAngle = 135;
      chart.endAngle = 405;

      // gradient color
      const gradient = new am4core.LinearGradient();
      gradient.addColor(am4core.color('#f6539c'));
      gradient.addColor(am4core.color('#fda558'));
      gradient.addColor(am4core.color('#40eaa5'));

      // background
      const axis = chart.xAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererCircular>());



      axis.renderer.line.strokeOpacity = 1;
      axis.renderer.line.strokeWidth = 19;
      axis.renderer.line.stroke = am4core.color('#ededed');
      axis.renderer.ticks.template.stroke = am4core.color('#ededed');
      axis.renderer.radius = am4core.percent(90);

      const axis2 = chart.xAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererCircular>());
      axis2.min = +this.beginVal;
      axis2.max = +this.endVal;
      axis2.renderer.innerRadius = 10;
      axis2.strictMinMax = true;
      axis2.renderer.labels.template.disabled = true;
      axis2.renderer.ticks.template.disabled = true;
      axis2.renderer.grid.template.disabled = true;

      const range0 = axis2.axisRanges.create();
      range0.value = 0;
      range0.endValue = 50;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = gradient;

      /**
       * Label
       */

      const label = chart.radarContainer.createChild(am4core.Label);
      label.isMeasured = false;
      label.fontSize = 45;
      label.x = am4core.percent(50);
      label.y = am4core.percent(100);
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'bottom';
      label.text = this.val + '';


      /**
       * Hand
       */

      const hand = chart.hands.push(new am4charts.ClockHand());
      hand.axis = axis2;
      hand.innerRadius = am4core.percent(-40);
      hand.radius = am4core.percent(30);
      hand.startWidth = 10;
      hand.endWidth = 3;
      hand.pin.disabled = false;
      hand.value = +this.val;
      hand.pin.radius = 5;

      hand.events.on('propertychanged', (ev) => {
        range0.endValue = ev.target.value;
        axis2.invalidate();
      });

      // demo:
      setInterval(() => {
        const value = Math.round(Math.random() * this.val);
        label.text = value + '';
        const animation = new am4core.Animation(hand, {
          property: 'value',
          to: value
        }, 1000, am4core.ease.cubicOut).start();
      }, 2000);
      // ------ end demo
      this.chart = chart;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
