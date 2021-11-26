import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsModule } from "./ui-components/ui-components.module";
import {RenamePropertiesPipe} from "./pipes/rename-properties.pipe";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {MaterialModule} from "./material/material.module";


@NgModule({
  declarations: [
    RenamePropertiesPipe,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UiComponentsModule
  ],
  providers: [RenamePropertiesPipe],
  exports: [
    CommonModule,
    MaterialModule,
    UiComponentsModule,
    RenamePropertiesPipe,
    TruncatePipe,
  ]
})
export class SharedModule { }
