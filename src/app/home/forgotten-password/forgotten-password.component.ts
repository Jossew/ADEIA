import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ForgottenPasswordDialogComponent } from "./forgotten-password-dialog/forgotten-password-dialog.component";

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
  @Input() email: string = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgottenPasswordDialogComponent, {
      width: '320px',
      data: { email: this.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
