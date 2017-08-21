import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeecornerComponent } from './coffeecorner/coffeecorner.component';

const routes: Routes = [
  { path: '', component: CoffeecornerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
