import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeecornerRoutingModule } from './coffeecorner-routing.module';
import { CoffeecornerComponent } from './coffeecorner.component';
import { JunkyComponent } from './junky/junky.component';
import { PinPadComponent } from './pin-pad/pin-pad.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule,
    CoffeecornerRoutingModule
  ],
  declarations: [
    JunkyComponent,
    PinPadComponent,
    CoffeecornerComponent,
    ImageComponent
  ],
  exports: [
    CoffeecornerRoutingModule
  ]
})
export class CoffeecornerModule { }
