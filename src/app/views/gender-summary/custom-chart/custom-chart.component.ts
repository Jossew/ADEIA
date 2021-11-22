import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.scss']
})
export class CustomChartComponent implements OnInit {

  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('custom-chart')) as any);


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
          data: [42, 58,]
        },
        {
          name: 'Brand Goals',
          type: 'bar',
          data: [38, 62,]
        },
      ]
    };

        this.ethnicitychart.setOption(barcharts);
     }





    }
