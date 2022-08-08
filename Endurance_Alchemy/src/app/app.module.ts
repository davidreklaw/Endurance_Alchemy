import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilityComponentsModule } from './utilities/components.module';
import { CoachModule } from './coach/coach.module';
import { PaceCalculatorComponent } from './pace-calculator/pace-calculator.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    PaceCalculatorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilityComponentsModule,
    CoachModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
