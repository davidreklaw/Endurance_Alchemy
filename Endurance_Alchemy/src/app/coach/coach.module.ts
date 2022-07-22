import { NgModule } from "@angular/core";
import { CoachRoutingModule } from "./coach-routing.module";
import { CoachComponent } from "./coach.component";
import { CoachDashboardComponent } from "./components/coach-dashboard/coach-dashboard.component";

@NgModule({
    declarations: [
        CoachComponent,
        CoachDashboardComponent
    ],
    imports: [
        CoachRoutingModule
    ],
    entryComponents: [

    ],
    exports: [
        CoachComponent,
        CoachDashboardComponent
    ]
})
export class CoachModule {}