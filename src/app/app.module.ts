import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IdeasModule } from "./ideas/ideas.module";
import {ChartsComponent} from "./ideas/chart/charts.component";
import {MatPaginatorModule} from '@angular/material/paginator';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent
  ],
  entryComponents: [ChartsComponent],
  imports: [
    BrowserModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    IdeasModule,
    MatPaginatorModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
