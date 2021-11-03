import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 
  animations:[
   // trigger('intro-text')
  ]

})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

}
