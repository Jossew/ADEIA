import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {
  editMode: boolean = false;
  formGroup: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      clientName: new FormControl(),
      benchmarks: new FormControl(),
      markets: new FormControl(),
      subBrands: new FormControl(),
    });

    if(route.snapshot.params.id) {
      this.editMode = true;
    }
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formGroup.value);
  }
}
