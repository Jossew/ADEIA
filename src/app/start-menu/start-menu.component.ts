import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {
  
  typesOfMarkets: string[] = ['Argentina', 'Australia', 'Austria', 'Bahamas', 'Bahrain', 'Bangladesh ', 'Barbados', 'Belgium ', 'Belize', 'Benin', 'Bermuda', 'Bolivia' ];

  constructor() { }

  ngOnInit(): void {
  }

}

