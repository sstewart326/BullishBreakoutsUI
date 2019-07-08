import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import {ChartComponent} from "./chart/chart.component";

@NgModule({
  imports: [
    CommonModule,
    DeferLoadModule
  ],
  declarations: [ChartComponent, IdeasComponent],
  exports: [IdeasComponent]
})
export class IdeasModule { }
