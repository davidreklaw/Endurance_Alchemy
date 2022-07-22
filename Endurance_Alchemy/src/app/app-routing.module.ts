import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoachComponent } from './coach/coach.component';

const routes: Routes = [
  {path:'coach', component: CoachComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
