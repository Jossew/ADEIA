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
  
  
 private myChart: any = null;

  ngOnInit() {
  // this.InitPipe();
  }

//  private InitPipe(): void {
//  this.myChart = echarts.init((document.getElementById('pipe')) as any);

//     const option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: "{a} <br/>{b}: {c} ({d}%)"
//         },
//         legend: {
//             orient: 'vertical',
//             x: 'left',
//             data:['elem1','elem2','elem3','elem4','elem5']
//         },
//         series: [
//             {
//                 name:'NOMBRE',
//                 type:'pie',
//                 radius: ['50%', '70%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         show: true,
//                         textStyle: {
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 data:[
//                     {value:335, name:'elem1'},
//                     {value:310, name:'elem2'},
//                     {value:234, name:'elem3'},
//                     {value:135, name:'elem4'},
//                     {value:1548, name:'elem5'}
//                 ]
//             }
//         ]
//     };

//     this.myChart.setOption(option);

//  }



  
  
  
  constructor() { }

  showFiller = false;



}
