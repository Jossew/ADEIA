import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-category-chart',
  templateUrl: './category-chart.component.html',
  styleUrls: ['./category-chart.component.scss']
})
export class CategoryChartComponent implements OnInit {

  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('category-chart')) as any);


    const  barcharts = {
      title: [
        {
          left: 'center',
          text: 'Gender Split',
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
      color: [
        '#5B34D5', '#AE786E'
      ],
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#616161'
          },
        },
      },
      yAxis: {
        type: 'category',
        data: ['Female', 'Male',]
      },
      series: [
        {
          name: 'Dove',
          type: 'bar',
          data: [15325, 23494,]
        },
        {
          name: 'Market',
          type: 'bar',
          data: [12203, 18989,]
        },
      ]
    };
  
        this.ethnicitychart.setOption(barcharts);
     }
      
     
      
    
    
    }
    