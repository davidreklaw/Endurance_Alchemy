import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ComponentRoutingModule } from "./components-routing.module";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FitnessCalculatorComponent } from "./components/fitness-calculator/fitness-calculator.component";
import { InfoTermComponent } from "./components/info-term/info-term.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { WorkoutBuilderComponent } from "./components/workout-builder/workout-builder.component";

@NgModule({
    declarations: [
        AboutUsComponent,
        ContactUsComponent,
        FitnessCalculatorComponent,
        InfoTermComponent,
        SettingsComponent,
        UserProfileComponent,
        WorkoutBuilderComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        MatDialogModule,
        ComponentRoutingModule
    ],
    exports: [
        BrowserAnimationsModule,
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
        AboutUsComponent,
        ContactUsComponent,
        FitnessCalculatorComponent,
        InfoTermComponent,
        SettingsComponent,
        UserProfileComponent,
        WorkoutBuilderComponent
    ]
})

export class UtilityComponentsModule {
    
}