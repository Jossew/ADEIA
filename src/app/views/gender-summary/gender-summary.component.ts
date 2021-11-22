import {Component, OnInit} from '@angular/core';
import * as echarts from 'echarts';
import {BehaviorSubject} from "rxjs";
import {clone} from 'lodash';


@Component({
  selector: 'app-gender-summary',
  templateUrl: './gender-summary.component.html',
  styleUrls: ['./gender-summary.component.scss']
})
export class GenderSummaryComponent implements OnInit {

  private genderchart: any = null;


  barcharts = {
    title: [
      {
        left: 'center',
        text: 'Gender Split',
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
    color: [
      '#5B34D5', '#AE786E'
    ],
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      splitLine: {
        show: true,
        lineStyle: {
          color: '#616161'
        },
      },
    },
    yAxis: {
      type: 'category',
      data: ['Female', 'Male',]
    },
    series: [
      {
        name: 'Dove',
        type: 'bar',
        data: [42, 58,]
      },
      {
        name: 'Market',
        type: 'bar',
        data: [49, 51,]
      },
    ]
  };


  ngOnInit() {
    this.InitPipe();
  }

  private InitPipe(): void {
    this.genderchart = echarts.init((document.getElementById('genderchart')) as any);
     this.genderchart.setOption(JSON.parse(JSON.stringify(this.barcharts)));

    // this.impressionsByPlatformOptionsSub.next(JSON.parse(JSON.stringify(barcharts)))


  }

  tabChanged(text: string): void {
    this.barcharts.series[1].name = text;
    this.genderchart.setOption(this.barcharts);

  }


  constructor() {
  }

}


