import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityComponentsModule } from './utilities/components.module';
import { CoachModule } from './coach/coach.module';
import { PaceCalculatorComponent } from './pace-calculator/pace-calculator.component';
import { ContactUsComponent } from './utilities/components/contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './utilities/components/about-us/about-us.component';
import { FitnessCalculatorComponent } from './utilities/components/fitness-calculator/fitness-calculator.component';
import { InfoTermComponent } from './utilities/components/info-term/info-term.component';
import { SettingsComponent } from './utilities/components/settings/settings.component';
import { UserProfileComponent } from './utilities/components/user-profile/user-profile.component';
import { WorkoutBuilderComponent } from './utilities/components/workout-builder/workout-builder.component';

@NgModule({
  declarations: [			
    AppComponent,
    NavbarComponent,
    PaceCalculatorComponent,
    ContactUsComponent,
    AboutUsComponent,
    FitnessCalculatorComponent,
    InfoTermComponent,
    SettingsComponent,
    UserProfileComponent,
    WorkoutBuilderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilityComponentsModule,
    CoachModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
