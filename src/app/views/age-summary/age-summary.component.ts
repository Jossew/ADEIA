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
        text: 'Age Split',
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
      '#5B34D5','#AE786E'
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
      data: ['0-9', '10-19', '20-29','30-39', '40-49', '50+' ]
    },
    series: [
      {
        name: 'Dove',
        type: 'bar',
        data: [0, 3, 36, 38, 20, 3]
      },
      {
        name: 'Market',
        type: 'bar',
        data: [10 , 18,20 , 13, 21,  18 ]
      },
    ]
  };
       this.agechart.setOption(barcharts);
    }



     constructor() { }



   }
