import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoachComponent } from "./coach.component";
import { CoachDashboardComponent } from "./components/coach-dashboard/coach-dashboard.component";
import { CoachRosterComponent } from "./components/coach-roster/coach-roster.component";

const routes: Routes = [
    {
        path: 'coach',
        component: CoachComponent,
        children: [
            { path: '', redirectTo: '/coach/dashboard', pathMatch: 'full'},
            {
                path: 'dashboard',
                component: CoachDashboardComponent
            },
            {
                path: 'roster',
                component: CoachRosterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoachRoutingModule {}