import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import {ChartsComponent} from "./chart/charts.component";
import {ChartService} from "../services/chart.service";
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OverlayModule} from "@angular/cdk/overlay";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatPaginatorModule,
    OverlayModule
  ],
  providers: [ ChartService ],
  declarations: [ IdeasComponent, ChartsComponent ],
  entryComponents: [ ChartsComponent ],
  exports: [ IdeasComponent ]
})
export class IdeasModule { }
