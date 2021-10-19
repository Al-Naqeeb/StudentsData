import { Component, Input, OnInit,ViewChild } from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() studentsAgeChart: any;
  constructor() { }

  ngOnInit(): void {
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Students Age',
              data: this.studentsAgeChart,
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          }],
          labels: this.studentsAgeChart
      },
  });
  }

}
