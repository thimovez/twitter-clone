import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }



  openDialog() {
    const dialogRef = this.dialog.open(PopupLogin);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    dialogRef.backdropClick().subscribe(click => {
      console.log(click);
    });
  }
}

@Component({
  selector: 'singup-modal',
  templateUrl: 'singup-modal.html',
})
export class PopupLogin {}
