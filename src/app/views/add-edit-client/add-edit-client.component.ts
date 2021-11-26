import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {
  id: string;
  formGroup: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      clientName: new FormControl(),
      benchmarks: new FormControl(),
      markets: new FormControl(),
      subBrands: new FormControl(),
    });

    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.formGroup.value);
  }
}
