import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-coach-roster-table',
    templateUrl: './coach-roster-table.component.html',
    styleUrls: ['./coach-roster-table.component.scss'],
})

export class CoachRosterTableComponent implements OnInit, OnDestroy, AfterViewInit {
    @Output() athleteSelected = new EventEmitter<object>();
    @Output() createAthlete = new EventEmitter();
    
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    dataSource = new MatTableDataSource<object>();
    displayedColumns = [''];

    constructor() {}

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
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