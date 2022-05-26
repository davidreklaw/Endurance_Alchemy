import { NgModule } from "@angular/core";
import { UtilityComponentsModule } from "../utilities/components.module";
import { CoachRoutingModule } from "./coach-routing.module";
import { CoachComponent } from "./coach.component";
import { CoachRosterComponent } from "./components/coach-roster/coach-roster.component";
import { CoachRosterTableComponent } from "./components/coach-roster/coach-roster-table/coach-roster-table.component";
import { CoachWorkoutComponent } from "./components/coach-workout/coach-workout.component";
import { CoachDashboardComponent } from "./components/coach-dashboard/coach-dashboard.component";

@NgModule({
    declarations: [
        CoachComponent,
        CoachRosterComponent,
        CoachRosterTableComponent,
        CoachWorkoutComponent,
        CoachDashboardComponent
    ],
    imports: [
        UtilityComponentsModule,
        CoachRoutingModule
    ]
})
export class CoachModule { }