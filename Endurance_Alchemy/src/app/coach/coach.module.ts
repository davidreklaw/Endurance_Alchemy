import { NgModule } from "@angular/core";
import { UtilityComponentsModule } from "../utilities/componentes.module";
import { CoachRoutingModule } from "./coach-routing.module";
import { CoachComponent } from "./coach.component";
import { CoachRosterComponent } from "./components/coach-roster/coach-roster.component";
import { CoachRosterTableComponent } from "./components/coach-roster/coach-roster-table/coach-roster-table.component";

@NgModule({
    declarations: [
        CoachComponent,
        CoachRosterComponent,
        CoachRosterTableComponent
    ],
    imports: [
        UtilityComponentsModule,
        CoachRoutingModule
    ]
})
export class CoachModule { }