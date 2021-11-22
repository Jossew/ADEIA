import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-ethnicity-summary',
  templateUrl: './ethnicity-summary.component.html',
  styleUrls: ['./ethnicity-summary.component.scss']
})
export class EthnicitySummaryComponent implements OnInit {

  private ethnicitychart: any = null;

   ngOnInit() {
   this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('ethnicitychart')) as any);


    const barcharts = {
      title: [
        {
          left: 'center',
          text: 'Ethnicity Split',
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
        data: ['Asian', 'Black', 'Indian','Latino','Middle Eastern','White']
      },
      series: [
        {
          name: 'Dove',
          type: 'bar',
          data: [23, 19,13, 5,9, 32,]
        },
        {
          name: 'Beauty Category',
          type: 'bar',
          data: [12, 29,9, 3,5, 39,]
        },
      ]
    };
        this.ethnicitychart.setOption(barcharts);
     }
      
     
      
      constructor() { }
    
    
    
    }
    