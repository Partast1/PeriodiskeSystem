import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodicDisplayComponent } from './periodic-display/periodic-display.component';
//import {PeroidicService} from './peroidic.service';
import { PeriodicDetailComponent } from './periodic-detail/periodic-detail.component';
import { PeriodicDisplay2Component } from './periodic-display2/periodic-display2.component';
import { InputElementComponent } from './input-element/input-element.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodicDisplayComponent,
    PeriodicDetailComponent,
    PeriodicDisplay2Component,
    InputElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(/*private service:PeroidicService*/){}
 }
