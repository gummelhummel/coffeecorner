import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackgroundImageService, CoffeecornerService } from './services';

import { DashboardModule, DashboardRoutingModule } from './dashboard';
import { CoffeecornerModule, CoffeecornerRoutingModule } from './coffeecorner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CoffeecornerModule,
    DashboardRoutingModule,
    CoffeecornerRoutingModule,
    AppRoutingModule
  ],
  providers: [
    BackgroundImageService,
    CoffeecornerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
