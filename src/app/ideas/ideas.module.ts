import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import {DirectivesModule} from "../directives/directives.module";
import {ChartsComponent} from "./chart/charts.component";

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  providers: [ ],
  declarations: [ IdeasComponent, ChartsComponent ],
  entryComponents: [ ChartsComponent ],
  exports: [ IdeasComponent ]
})
export class IdeasModule { }
