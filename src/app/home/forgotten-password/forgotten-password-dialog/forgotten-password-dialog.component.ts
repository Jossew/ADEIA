import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgotten-password-dialog',
  templateUrl: './forgotten-password-dialog.component.html',
  styleUrls: ['./forgotten-password-dialog.component.scss']
})
export class ForgottenPasswordDialogComponent {
  email: FormControl;
  constructor(
    public dialogRef: MatDialogRef<ForgottenPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { email: string },
  ) {
    this.email = new FormControl(data.email, [Validators.required, Validators.email]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
