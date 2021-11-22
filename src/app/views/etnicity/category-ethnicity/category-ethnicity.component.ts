import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-category-ethnicity',
  templateUrl: './category-ethnicity.component.html',
  styleUrls: ['./category-ethnicity.component.scss']
})
export class CategoryEthnicityComponent implements OnInit {

 
  private ethnicitychart: any = null;

  constructor() { }

  ngOnInit(): void {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.ethnicitychart = echarts.init((document.getElementById('category-ethnicity')) as any);


  
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
          data: [23, 29,19, 2,5, 45,]
        },
        {
          name: 'Beauty Category',
          type: 'bar',
          data: [22, 26,9, 3,6, 49,]
        },
      ]
    };
        this.ethnicitychart.setOption(barcharts);
     }
      
     
      
    
    
    }
    