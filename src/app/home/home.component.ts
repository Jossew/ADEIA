import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

  animations:[
   // trigger('intro-text')
  ]

})
export class HomeComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
