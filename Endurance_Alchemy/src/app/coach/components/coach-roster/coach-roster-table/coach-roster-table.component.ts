import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

export interface Athlete {
    name: string;
    age: number;
    sex: string;
}

const ATHLETE_DATA: Athlete[] = [
    {name: 'SuperDave Sr' , age: 21 , sex: 'Male'},
    {name: 'SuperDave Jr' , age: 20 , sex: 'Male'},
    {name: 'SuperDave So' , age: 19 , sex: 'Male'},
    {name: 'SuperDave Fr' , age: 18 , sex: 'Male'}
];

@Component({
    selector: 'app-coach-roster-table',
    templateUrl: './coach-roster-table.component.html',
    styleUrls: ['./coach-roster-table.component.scss'],
})

export class CoachRosterTableComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    @Output() athleteSelected = new EventEmitter<Athlete>();
    @Output() createAthlete = new EventEmitter();

    dataSource = new MatTableDataSource<Athlete>();
    displayedColumns = ['name', 'age', 'sex', 'summary'];

    constructor() {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource<Athlete>(ATHLETE_DATA);
        this.dataSource.sort = this.sort;
    }

    ngAfterViewInit() {
 
    }

    onAthleteSelected() {

    }

    onCreateAthlete() {

    }

    applyFilter(event: Event) {

    }

    formatName(name: string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    ngOnDestroy() {
        
    }
}