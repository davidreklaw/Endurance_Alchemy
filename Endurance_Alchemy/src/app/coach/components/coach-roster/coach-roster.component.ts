import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-coach-roster',
    templateUrl: './coach-roster.component.html',
    styleUrls: ['./coach-roster.component.scss'],
})

export class CoachRosterComponent implements OnInit, OnDestroy {
    
    constructor(public dialog: MatDialog,
                private router: Router,
                private snackBar: MatSnackBar) {

    }

    ngOnInit() {
        
    }

    ngOnDestroy() {
        
    }
}