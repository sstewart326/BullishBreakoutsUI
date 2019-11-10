import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {IdeasModule} from "./ideas/ideas.module";
import {ChartService} from "./services/chart.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    IdeasModule
  ],
  providers: [ ChartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
