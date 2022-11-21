import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
}

@Component({
  selector: 'app-add-athlete-dialog',
  templateUrl: './add-athlete-dialog.component.html',
  styleUrls: ['./add-athlete-dialog.component.scss']
})

export class AddAthleteDialogComponent implements OnInit {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<AddAthleteDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData) {

      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
  }

  closeDialog() {
    this.dialogRef.close({event: 'Cancel'});
  }

  ngOnInit() {
  }

}
