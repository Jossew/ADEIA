import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-gender-summary',
  templateUrl: './gender-summary.component.html',
  styleUrls: ['./gender-summary.component.scss']
})
export class GenderSummaryComponent implements OnInit {

  private genderchart: any = null;

   ngOnInit() {
   this.InitPipe();
  }

  private InitPipe(): void {
    this.genderchart = echarts.init((document.getElementById('genderchart')) as any);

    const data: number[] = [];
    for (let i = 0; i < 5; ++i) {
      data.push(Math.round(Math.random() * 200));
    }
    const barcharts = {
      title: [
        {
          left: 'center',
          text: 'GENDER SOMETHING SPLIT',
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        }],
      xAxis: {
        max: 'dataMax',
        textStyle: {
          fontSize: 14,
          color: '#fff'
        },
        splitLine:{
          show:true,
          lineStyle: {
            color:'#616161'
          },
        },
      },
      yAxis: {
        type: 'category',
        data: ['Male', 'Female', 'Mixed',],
        animationDuration: 300,
        animationDurationUpdate: 300,
      },
      series: [
        {
          realtimeSort: true,
          name: 'Gender',
          type: 'bar',
          data: data,
          label: {
            show: false,
            position: 'right',
          }
        }
      ],
      legend: {
        show:false,
        bottom: '10',
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      color:[ 
        '#5B34D5','#E2DAFB','#AE786E',
      ],
    };
        this.genderchart.setOption(barcharts);
     }
    
      constructor() { }
    
    }
    

