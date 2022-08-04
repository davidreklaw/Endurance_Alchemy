import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  { name: "Super Dave Sr.", age: 21, sex: "Male"},
  { name: "Michael Walker", age: 27, sex: "Male"},
  { name: "Tammy Walker", age: 62, sex: "Female"},
  { name: "David Walker", age: 62, sex: "Female"},
  { name: "Payton Walker", age: 23, sex: "Male"}
]

@Component({
  selector: 'app-roster-collection',
  templateUrl: './roster-collection.component.html',
  styleUrls: ['./roster-collection.component.scss']
})
export class RosterCollectionComponent implements OnInit {

  @ViewChild(MatSort, { static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Athlete>();
  displayedColumns = ['name', 'age', 'sex', 'actions'];

  constructor() { }

  ngOnInit() {
    this.dataSource.data = ATHLETE_DATA;
    this.dataSource.paginator = this.dataSource.paginator;
  }

  applyFilter() {
    
  }

  onChangePage(pe:PageEvent) {
    console.log(pe.pageIndex);
    console.log(pe.pageSize);
  }
}
