import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-summary',
  templateUrl: './age-summary.component.html',
  styleUrls: ['./age-summary.component.scss']
})
export class AgeSummaryComponent implements OnInit {

  constructor() { }
  showFiller = false;
  ngOnInit(): void {
  }

}
