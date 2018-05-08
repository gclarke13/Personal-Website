import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ProjectsComponent } from "./projects.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    ProjectsComponent
  ],
  providers: [
  ],
  exports: [
    ProjectsComponent
  ]
})

export class ProjectsModule {
}
