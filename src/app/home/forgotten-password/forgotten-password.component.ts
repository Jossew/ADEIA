import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ForgottenPasswordDialogComponent } from "./forgotten-password-dialog/forgotten-password-dialog.component";

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss']
})
export class ForgottenPasswordComponent implements OnInit {
  @Input() username: string = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgottenPasswordDialogComponent, {
      width: '320px',
      data: { username: this.username }
    });

    dialogRef.afterClosed().subscribe((username: string) => {
      if(username) {
        // API call to forgot password
        console.log(username);
      }
    });
  }
}
