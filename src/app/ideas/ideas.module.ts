import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import {DirectivesModule} from "../directives/directives.module";
import {ChartComponent} from "./chart/chart.component";

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  providers: [ ],
  declarations: [ IdeasComponent, ChartComponent ],
  entryComponents: [ ChartComponent ],
  exports: [ IdeasComponent ]
})
export class IdeasModule { }
