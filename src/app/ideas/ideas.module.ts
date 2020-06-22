import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import {ChartsComponent} from "./chart/charts.component";
import {ChartService} from "../services/chart.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ ChartService ],
  declarations: [ IdeasComponent, ChartsComponent ],
  entryComponents: [ ChartsComponent ],
  exports: [ IdeasComponent ]
})
export class IdeasModule { }
