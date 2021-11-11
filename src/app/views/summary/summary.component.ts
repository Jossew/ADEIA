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
    this.agePie = echarts.init((document.getElementById('piechartage')) as any);
    this.genderPie = echarts.init((document.getElementById('piechartgender')) as any);
    this.ethnicityPie = echarts.init((document.getElementById('piechartetnicity')) as any);


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
    this.agePie.setOption(piecharts);
    this.genderPie.setOption(piecharts);
    this.ethnicityPie.setOption(piecharts);
 }
  
  
  constructor() { }

  showFiller = false;



}
