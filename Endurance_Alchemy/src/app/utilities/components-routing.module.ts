import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { FitnessCalculatorComponent } from "./components/fitness-calculator/fitness-calculator.component";
import { InfoTermComponent } from "./components/info-term/info-term.component";
import { WorkoutBuilderComponent } from "./components/workout-builder/workout-builder.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'fitness-calculator',
        component: FitnessCalculatorComponent
    },
    {
        path: 'info-terminology',
        component: InfoTermComponent
    },
    {
        path: 'workout-builder',
        component: WorkoutBuilderComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ComponentRoutingModule {}