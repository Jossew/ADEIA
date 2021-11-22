import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})


export class SummaryComponent implements OnInit {

  typesOfCategories: string[] = ['Beauty', 'Fashion', 'Space', 'Finance'];
  typesOfClients: string[] = ['Loreal', 'Maybelline', 'Urban Decay', 'Clyde Space', 'Global Invacom Waveguide'];


  private agePie: any = null;
  private genderPie: any = null;
  private ethnicityPie: any = null;
  navOpen: boolean = false;

  private diversityScore: any = null;
  selectedBenchMark: string = 'Category';


  ngOnInit() {
    // this.navOpen = false;
    this.InitPipe();
  }


  private InitPipe(): void {
    this.agePie = echarts.init((document.getElementById('piechartage')) as any);
    this.genderPie = echarts.init((document.getElementById('piechartgender')) as any);
    this.ethnicityPie = echarts.init((document.getElementById('piechartetnicity')) as any);
    this.diversityScore = echarts.init((document.getElementById('scorechart')) as any);


    const genderpie = {
      title: [
        {
          left: 'center',
       //   text: 'GENDER',
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        },
        {
          //   subtext: 'updated 1hr ago',
          left: '50%',
          bottom: '0%',
          textAlign: 'center'
        },
      ],
      color: [
        '#D53A54', '#5B34D5',
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        show: false,
      },
      label: {
        formatter: '{b|{b}:}{per|{d}%}',
        backgroundColor: 'rgba(0,0,0,0.5)',
        // borderColor: '#666',
        // borderWidth: 1,
        //borderRadius: 4,
        padding: [3, 4],
        rich: {
          // a: {
          //   color: '#616161',
          //   lineHeight: 22,
          //   align: 'center'
          // },
          // hr: {
          //   borderColor: '#8C8D8E',
          //   width: '100%',
          //   borderWidth: 1,
          //   height: 0
          // },
          c: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          b: {
            color: '#fff',
            fontSize: 12,
         //   fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#000',
            padding: [6, 3],
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 'bold',
          }
        }
      },
      itemStyle: {
        borderRadius: 3
      },
      series: [
        {
          name: 'GENDER',
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            color: '#616161'
          },
          data: [
            {value: 32, name: 'Male'},
            {value: 68, name: 'Female'},
          ]
        }
      ]
    };
    this.genderPie.setOption(genderpie);

    const agepie = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: [
        {
          left: 'center',
     //     text: 'AGE',
          textStyle: {
            fontSize: 13,
            color: '#fff'
          }
        },
        {
          //  subtext: 'updated 1hr ago',
          left: '50%',
          bottom: '0%',
          textAlign: 'center'
        },
      ],
      color: [
        '#5B34D5', '#fff', '#B19DEB', '#3AD564', '#c4ccd3', '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#A5224A',
      ],
      legend: {
        show: false,
      },
      label: {
        // formatter: '{b|{b}：}{c}  {per|{d}%}',
        formatter: '{b|{b}:}{per|{d}%}',
        backgroundColor: 'rgba(0,0,0,0.5)',
        // borderColor: '#666',
        borderWidth: 1,
        borderRadius: 4,
        padding: [3, 4],
        rich: {
          // a: {
          //   color: '#616161',
          //   lineHeight: 22,
          //   align: 'center'
          // },
          // hr: {
          //   borderColor: '#8C8D8E',
          //   width: '100%',
          //   borderWidth: 1,
          //   height: 0
          // },
          b: {
            color: '#fff',
            fontSize: 12,
            //   fontWeight: 'bold',
          },
          per: {
            color: '#fff',
            backgroundColor: '#000',
            padding: [3, 4],
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 'bold',
          }
        }
      },
      series: [
        {
          name: 'AGE',
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            color: '#616161'
          },
          itemStyle: {
            borderRadius: 3
          },
          data: [
            {value: 0 , name: '0-9' },
            {value: 3 , name: '10-19' },
            {value: 36 , name:'20-29' },
            {value: 38 , name: '30-39' },
            {value: 20 , name: '40-49' },
            {value: 3 , name: '50+' }
          ]
        }
      ]
    };
    this.agePie.setOption(agepie);


    const ethnicitypie = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      title: [
        {
          left: 'center',
       //   text: 'ETHNICITY',
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        },
        {
          //  subtext: 'updated 1hr ago',
          left: '50%',
          bottom: '0%',
          textAlign: 'center'
        },
      ],
      color: [
        '#5B34D5', '#fff', '#B19DEB', '#3AD564', '#51839E', '#AE786E', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#A5224A',
      ],
      legend: {
        show: false,
      },
      label: {
        formatter: '{b|{b}:}{per|{d}%}',
        backgroundColor: 'rgba(0,0,0,0.5)',
        // borderColor: '#666',
        borderWidth: 1,
        borderRadius: 4,
        padding: [3, 4],
        rich: {
          // a: {
          //   color: '#616161',
          //   lineHeight: 22,
          //   align: 'center'
          // },
          // hr: {
          //   borderColor: '#8C8D8E',
          //   width: '100%',
          //   borderWidth: 1,
          //   height: 0
          // },
          b: {
            color: '#fff',
            fontSize: 12,
            //   fontWeight: 'bold',
          },
          per: {
            color: '#fff',
            backgroundColor: '#000',
            padding: [3, 4],
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 'bold',
          }
        }
      },
      series: [
        {
          name: 'ETHNICITY',
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            color: '#616161'
          },
          itemStyle: {
            borderRadius: 3
          },
          data: [
            {value: 300, name: 'Asian'},
            {value: 600, name: 'Black'},
            {value: 300, name: 'Indian'},
            {value: 600, name: 'Latino'},
            {value: 600, name: 'Middle Eastern'},
            {value: 600, name: 'White'},
          ]
        }
      ]
    };
    this.ethnicityPie.setOption(ethnicitypie);


    const gaugeData = [
      {
        value: 20,
        name: 'GENDER',

        title: {
          offsetCenter: ['0%', '-50%'],
           textStyle: {
            fontSize: 13,
            color: '#fff'
          }
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '-35%'],
        }
      },
      {
        value: 40,
        name: 'AGE',
        title: {
          offsetCenter: ['0%', '-10%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '5%']
        }
      },
      {
        value: 60,
        name: 'ETHNICITY',
        title: {
          offsetCenter: ['0%', '30%']
        },
        detail: {
          valueAnimation: true,
          offsetCenter: ['0%', '45%']
        }
      }
    ];

    const scorechart = {
      color: [
        '#5B34D5', '#E2DAFB', '#AE786E',
      ],

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
              borderWidth: 0,
              borderColor: '#ccc'
            }
          },
          axisLine: {
            lineStyle: {
              width: 40,
              opacity: 0.05,
            },
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
            fontSize: 13,
            //  color: '#616161',
            color: '#FFF',
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
    this.diversityScore.setOption(scorechart);
  }


  constructor() {
  }


}
