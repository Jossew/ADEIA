import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-custom-age',
  templateUrl: './custom-age.component.html',
  styleUrls: ['./custom-age.component.scss']
})
export class CustomAgeComponent implements OnInit {

 
  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('custom-age')) as any);


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
        data: ['20-25', '26-30', '31-35','36-40' ]
      },
      series: [
        {
          name: 'Dove',
          type: 'bar',
          data: [50, 118, 19, 16 ]
        },
        {
          name: 'Beauty Category',
          type: 'bar',
          data: [60, 120, 3, 4 ]
        },
      ]
    };
  
        this.ethnicitychart.setOption(barcharts);
     }
      
     
      
    
    
    }
    