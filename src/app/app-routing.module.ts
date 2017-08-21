import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeecornerRoutingModule } from './coffeecorner/';
import { DashboardRoutingModule } from './dashboard';

const routes: Routes = [
  { path: '', component: DashboardRoutingModule },
  { path: 'coffeecorner', component: CoffeecornerRoutingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
