import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoachComponent } from "./coach.component";
import { CoachDashboardComponent } from "./components/coach-dashboard/coach-dashboard.component";
import { CoachRosterComponent } from "./components/coach-roster/coach-roster.component";
import { CoachWorkoutComponent } from "./components/coach-workout/coach-workout.component";

const routes: Routes = [
    {
        path: 'coach',
        component: CoachComponent,
        children: [
            {path: 'dashboard', component: CoachDashboardComponent},
            {path: 'roster', component: CoachRosterComponent},
            {path: 'workout', component: CoachWorkoutComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CoachRoutingModule { }