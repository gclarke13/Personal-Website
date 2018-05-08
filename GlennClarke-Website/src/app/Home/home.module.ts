import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "./home.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ],
  exports: [
    HomeComponent
  ]
})

export class HomeModule {
}
