import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAthleteDialogComponent } from './components/add-athlete-dialog/add-athlete-dialog.component';

@Component({
  selector: 'app-coach-roster',
  templateUrl: './coach-roster.component.html',
  styleUrls: ['./coach-roster.component.scss']
})
export class CoachRosterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddAthleteDialogComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      }
      else if (result.event == 'Update') {
        this.updateRowData(result.data);
      }
      else if (result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any) {
    console.log("Athlete Added");
  }

  updateRowData(row_obj: any) {
    console.log("Athlete Updated");
  }

  deleteRowData(row_obj: any) {
    console.log("Athlete Deleted");
  }

  ngOnInit() {
  }

}
