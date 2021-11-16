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

   const barcharts = {
    title: [
      {
        left: 'center',
        text: 'AGE SPLIT',
        textStyle: {
          fontSize: 14,
          color: '#fff'
      }
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      bottom: 0,
      textStyle: {
        fontSize: 14,
        color: '#616161'
    }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true
    },
    color:[ 
      '#5B34D5','#E2DAFB'
    ],
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
        splitLine:{
          show:true,
          lineStyle:{
            color: '#616161'
          },
      },
    },
    yAxis: {
      type: 'category',
      data: ['20-25', '26-30', '31-35','36-40' ]
    },
    series: [
      {
        name: 'Dove',
        type: 'bar',
        data: [50, 138, 19, 12 ]
      },
      {
        name: 'Beauty Category',
        type: 'bar',
        data: [60, 150, 3, 2 ]
      },
    ]
  };
       this.agechart.setOption(barcharts);
    }
     
    
     
     constructor() { }
   
   
   
   }
   