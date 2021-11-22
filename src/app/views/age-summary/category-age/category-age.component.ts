import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-category-age',
  templateUrl: './category-age.component.html',
  styleUrls: ['./category-age.component.scss']
})
export class CategoryAgeComponent implements OnInit {


  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('category-age')) as any);


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
          data: [0, 3, 36, 38, 20, 2 , 1]
        },
        {
          name: 'Beauty Category',
          data: [0, 8, 37, 33, 10, 2 , 10],
          type: 'bar',
        },
      ]
    };

        this.ethnicitychart.setOption(barcharts);
     }





    }
