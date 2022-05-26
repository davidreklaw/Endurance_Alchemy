import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-coach-roster',
    templateUrl: './coach-roster.component.html',
    styleUrls: ['./coach-roster.component.scss'],
})

export class CoachRosterComponent implements OnInit, OnDestroy {
    
    constructor(private router: Router) {

    }

    ngOnInit() {
        
    }

    athleteSelected() {

    }

    createAthlete() {

    }

    ngOnDestroy() {
        
    }
}