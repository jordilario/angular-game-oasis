import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MainPageBodyComponent } from './main-page-body/main-page-body.component';
import { HeaderGuestComponent } from './header-guest/header-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageBodyComponent,
    HeaderGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
