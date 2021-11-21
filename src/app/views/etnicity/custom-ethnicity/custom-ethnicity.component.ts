import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-custom-ethnicity',
  templateUrl: './custom-ethnicity.component.html',
  styleUrls: ['./custom-ethnicity.component.scss']
})
export class CustomEthnicityComponent implements OnInit {

 
  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('custom-ethnicity')) as any);



    const barcharts = {
      title: [
        {
          left: 'center',
          text: 'ETHNICITY SPLIT',
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
        data: ['Asian', 'Black', 'Indian','Latino','Middle Eastern','White']
      },
      series: [
        {
          name: 'Dove',
          type: 'bar',
          data: [23, 29,13, 5,5, 33,]
        },
        {
          name: 'Beauty Category',
          type: 'bar',
          data: [20, 26,9, 3,5, 39,]
        },
      ]
    };
        this.ethnicitychart.setOption(barcharts);
     }
      
     
      
    
    
    }
    