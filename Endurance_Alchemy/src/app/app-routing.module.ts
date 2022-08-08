import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';
import { PaceCalculatorComponent } from './pace-calculator/pace-calculator.component';

const routes: Routes = [
  {path:'coach', component: CoachComponent},
  {path: 'pace-calculator', component: PaceCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
