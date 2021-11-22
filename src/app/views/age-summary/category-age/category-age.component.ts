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
        data: ['20-25', '26-30', '31-35','36-40' ]
      },
      series: [
        {
          name: 'Dove',
          type: 'bar',
          data: [50, 38, 10, 2 ]
        },
        {
          name: 'Beauty Category',
          data: [40, 25, 35,  5 ],
          type: 'bar',
        },
      ]
    };

        this.ethnicitychart.setOption(barcharts);
     }





    }
