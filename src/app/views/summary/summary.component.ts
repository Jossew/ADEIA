import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})



export class SummaryComponent implements OnInit {

  typesOfCategories: string[] = ['Beauty', 'Fashion', 'Space', 'Finance' ];
  typesOfClients: string[] = ['Loreal', 'Maybelline', 'Urban Decay', 'Clyde Space','Global Invacom Waveguide'];
  
  
 // private myChart: any = null;
 private agePie: any = null;
 private genderPie: any = null;
 private ethnicityPie: any = null;

  ngOnInit() {
   this.InitPipe();
  }

 private InitPipe(): void {
 // this.myChart = echarts.init((document.getElementById('pipe')) as any);
 this.agePie = echarts.init((document.getElementById('piechartage')) as any);
 this.genderPie = echarts.init((document.getElementById('piechartgender')) as any);
 this.ethnicityPie = echarts.init((document.getElementById('piechartetnicity')) as any);

const lineStyle = {
  width: 1,
  opacity: 0.5
};
const indexchart = {
  title: {
  //  text: 'Bar Chart with Negative Value'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: 80,
    bottom: 30
  },
  xAxis: {
    type: 'value',
    position: 'top',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    data: [
      'ten',
      'nine',
      'eight',
      'seven',
      'six',
      'five',
      'four',
      'three',
      'two',
      'one'
    ]
  },

  series: [
    {
      name: 'Cost',
      type: 'bar',
      stack: 'Total',
      label: {
        show: true,
        formatter: '{b}'
      },
      data: [
        { value: -0.07, },
        { value: -0.09, },
        0.2,
        0.44,
        { value: -0.23,  },
        0.08,
        { value: -0.17,  },
        0.47,
        { value: -0.36,},
        0.18
      ]
    }
  ]
};

const fontWeight = {
  fontWeight: 'bold',
};
const color = {};
const piecharts = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontWeight:  fontWeight,
          color: color,
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};
  //  this.myChart.setOption(indexchart);
    this.agePie.setOption(piecharts);
    this.genderPie.setOption(piecharts);
    this.ethnicityPie.setOption(piecharts);
 }
  
  
  constructor() { }

  showFiller = false;



}
