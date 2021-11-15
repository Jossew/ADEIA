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

 private diversityScore: any = null;


  ngOnInit() {
   this.InitPipe();
  }




 private InitPipe(): void {
    this.agePie = echarts.init((document.getElementById('piechartage')) as any);
    this.genderPie = echarts.init((document.getElementById('piechartgender')) as any);
    this.ethnicityPie = echarts.init((document.getElementById('piechartetnicity')) as any);
    this.diversityScore = echarts.init((document.getElementById('scorechart')) as any);


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
    title: [
    {
      left: 'center',
      text: 'Chart Title',
      textStyle: {
        fontSize: 14,
        color: '#fff'
    }
    },
  ],
  color:[ 
    '#5B34D5','#fff','#FF9800','#81C784','#c4ccd3','#c23531','#2f4554','#61a0a8','#d48265','#91c7ae',  '#A5224A',
  ],
  series: [
    {
      name: 'Diversity',
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




const gaugeData = [
  {
    value: 20,
    name: 'Perfect',
    title: {
      offsetCenter: ['0%', '-30%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '-20%']
    }
  },
  {
    value: 40,
    name: 'Good',
    title: {
      offsetCenter: ['0%', '0%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '10%']
    }
  },
  {
    value: 60,
    name: 'Commonly',
    title: {
      offsetCenter: ['0%', '30%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '40%']
    }
  }
];

const scorechart = {
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 40
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: gaugeData,
      title: {
        fontSize: 14
      },
      detail: {
        width: 50,
        height: 14,
        fontSize: 14,
        color: 'auto',
        borderColor: 'auto',
        borderRadius: 20,
        borderWidth: 1,
        formatter: '{value}%'
      }
    }
  ]
};




    this.agePie.setOption(piecharts);
    this.genderPie.setOption(piecharts);
    this.ethnicityPie.setOption(piecharts);
    this.diversityScore.setOption(scorechart);
 }
  
  
  constructor() { }





}
