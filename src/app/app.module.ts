import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JunkyComponent } from './junky/junky.component';
import { CoffeecornerComponent } from './coffeecorner/coffeecorner.component';
import { PinPadComponent } from './pin-pad/pin-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    JunkyComponent,
    CoffeecornerComponent,
    PinPadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
