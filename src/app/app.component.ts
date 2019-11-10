import {Component, OnInit} from '@angular/core';
import {ChartService} from "./services/chart.service";
import {Chart} from "./ideas/chart/chart";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bullified-breakouts';
  charts: Chart[]

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.charts = this.chartService.getCharts()
  }
}
