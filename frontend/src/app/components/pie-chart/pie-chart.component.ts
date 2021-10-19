import { Component, OnInit,ViewChild ,Input} from '@angular/core';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() genderCount: any;
  constructor() {
    
   }

  ngOnInit(): void {
    
      
    
    console.log(this.genderCount);
    
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  
  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
      type: 'pie',
      data: {
          datasets: [{
              label: 'Students Gender',
              data: this.genderCount,
              backgroundColor: ['rgb(54, 162, 235)',"rgb(255,99,132)"
            ],
              borderColor: "#ffffff",
              fill: true,
          }],
          labels: ['Male','Female']
      },
  });
  }

}
