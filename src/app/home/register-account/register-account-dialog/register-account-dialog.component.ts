import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register-account-dialog',
  templateUrl: './register-account-dialog.component.html',
  styleUrls: ['./register-account-dialog.component.scss']
})
export class RegisterAccountDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterAccountDialogComponent>,
  ) {
    this.form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required, Validators.email]),
        company: new FormControl('', [Validators.required]),
        comment: new FormControl('', ),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
