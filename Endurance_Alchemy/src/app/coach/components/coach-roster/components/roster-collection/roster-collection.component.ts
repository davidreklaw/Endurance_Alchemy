import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Athlete {
  name: string;
  age: number;
  sex: string;
}

const ATHLETE_DATA: Athlete[] = [
  { name: "Super Dave Fr.", age: 18, sex: "Male"},
  { name: "Super Dave So.", age: 19, sex: "Male"},
  { name: "Super Dave Jr.", age: 20, sex: "Male"},
  { name: "Super Dave Sr.", age: 21, sex: "Male"}
]

@Component({
  selector: 'app-roster-collection',
  templateUrl: './roster-collection.component.html',
  styleUrls: ['./roster-collection.component.scss']
})
export class RosterCollectionComponent implements OnInit {

  @ViewChild(MatSort, { static: true}) sort: MatSort;

  dataSource = new MatTableDataSource<Athlete>();
  displayedColumns = ['name', 'age', 'sex', 'actions'];

  constructor() { }

  ngOnInit() {
    this.dataSource.data = ATHLETE_DATA;
  }

  applyFilter() {
    
  }
}
