import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { DeferLoadModule } from '@trademe/ng-defer-load';

import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    HttpClientModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
