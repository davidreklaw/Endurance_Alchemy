import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaceCalculatorComponent } from './pace-calculator/pace-calculator.component';

const routes: Routes = [
  {path:'coach', component: CoachComponent},
  {path: 'pace-calculator', component: PaceCalculatorComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
