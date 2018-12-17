import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  imports: [
    CommonModule,
    DeferLoadModule
  ],
  declarations: [IdeasComponent]
})
export class IdeasModule { }
