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
const color = {color:'#5B34D5'};
const piecharts = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
  },
    title: [
    {
      left: 'center',
      text: 'Gradient along the y axis'
    },
    {
      top: '55%',
      left: 'center',
      text: 'Gradient along the x axis'
    }
  ],
  color:[ '#5B34D5','#fff','#FF9800','#81C784','#c4ccd3','#c23531','#2f4554','#61a0a8','#d48265','#91c7ae',  '#A5224A',

  '#FFF18C'],
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
        { value: 1048, name: 'Male' },
        { value: 735, name: 'Female' },
        { value: 580, name: 'Unknown'},
        { value: 580, name: 'Something else',},
      ]
    }
  ]
};
    this.agePie.setOption(piecharts);
    this.genderPie.setOption(piecharts);
    this.ethnicityPie.setOption(piecharts);
 }
  
  
  constructor() { }





}
