import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import {ChartComponent} from "./chart/chart.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ IdeasComponent, ChartComponent ],
  exports: [ IdeasComponent ]
})
export class IdeasModule { }
