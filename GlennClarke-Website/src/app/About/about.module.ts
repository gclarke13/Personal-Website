import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from "./about.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AboutComponent
  ],
  providers: [
  ],
  exports: [
    AboutComponent
  ]
})

export class AboutModule {
}
