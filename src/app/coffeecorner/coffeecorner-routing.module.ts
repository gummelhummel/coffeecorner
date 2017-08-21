import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeecornerComponent } from './coffeecorner.component';

const routes: Routes = [
  { path: 'coffeecorner', component: CoffeecornerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeecornerRoutingModule { }
