import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-age-summary',
  templateUrl: './age-summary.component.html',
  styleUrls: ['./age-summary.component.scss']
})
export class AgeSummaryComponent implements OnInit {

  private agechart: any = null;

  ngOnInit() {
  this.InitPipe();
 }

 private InitPipe(): void {
   this.agechart = echarts.init((document.getElementById('agechart')) as any);

   const data: number[] = [];
   for (let i = 0; i < 5; ++i) {
     data.push(Math.round(Math.random() * 200));
   }
   const barcharts = {
     xAxis: {
       max: 'dataMax'
     },
     yAxis: {
       type: 'category',
       data: ['A', 'B', 'C', 'D', 'E'],
       inverse: true,
       animationDuration: 300,
       animationDurationUpdate: 300,
       max: 2 // only the largest 3 bars will be displayed
     },
     series: [
       {
         realtimeSort: true,
         name: 'X',
         type: 'bar',
         data: data,
         label: {
           show: true,
           position: 'right',
           valueAnimation: true
         }
       }
     ],
     legend: {
       show: true
     },
     animationDuration: 0,
     animationDurationUpdate: 3000,
     animationEasing: 'linear',
     animationEasingUpdate: 'linear'
   };
       this.agechart.setOption(barcharts);
    }
     
    
     
     constructor() { }
   
   
   
   }
   