import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RegisterAccountDialogComponent} from "./register-account-dialog/register-account-dialog.component";

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterAccountDialogComponent, {
      width: '320px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: { name: string; username: string; company: string; comment: string}) => {
      if(result) {
        // API call to register
        console.log(result.name, result.username, result.company, result.comment);
      }
    });
  }
}
