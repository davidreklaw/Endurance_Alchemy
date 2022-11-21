import { NgModule } from "@angular/core";
import { UtilityComponentsModule } from "../utilities/components.module";
import { CoachRoutingModule } from "./coach-routing.module";
import { CoachComponent } from "./coach.component";
import { CoachDashboardComponent } from "./components/coach-dashboard/coach-dashboard.component";
import { CoachRosterComponent } from "./components/coach-roster/coach-roster.component";
import { AddAthleteDialogComponent } from "./components/coach-roster/components/add-athlete-dialog/add-athlete-dialog.component";
import { RosterCollectionComponent } from "./components/coach-roster/components/roster-collection/roster-collection.component";

@NgModule({
    declarations: [
        CoachComponent,
        CoachDashboardComponent,
        CoachRosterComponent,
        RosterCollectionComponent,
        AddAthleteDialogComponent
    ],
    imports: [
        CoachRoutingModule,
        UtilityComponentsModule
    ],
    entryComponents: [

    ],
    exports: [
        CoachComponent,
        CoachDashboardComponent,
        CoachRosterComponent,
        RosterCollectionComponent
    ]
})
export class CoachModule {}