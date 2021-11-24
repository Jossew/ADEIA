import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent implements OnInit {
  filtersForm: FormGroup;
  searchOptions$: Observable<any[]>;

  constructor() {
    this.filtersForm = new FormGroup({
      searchString: new FormControl(),
      platform: new FormControl(),
      date: new FormControl(),
    });

    // Replace of with httpClient call
    this.searchOptions$ = of(['Option 1', 'Option 2', 'Option 3']);
  }

  ngOnInit(): void {
  }
}
