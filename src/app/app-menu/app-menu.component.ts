import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  navOpen: boolean = false;
  @Input() sideBarWidth: string = '0';

  constructor() {}

  ngOnInit(): void {
  }

}
