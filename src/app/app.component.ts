import {Component, HostListener, OnInit} from '@angular/core';
import {ChartService} from "./services/chart.service";
import {Charts} from "./ideas/chart/charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bullified-breakouts';

  constructor(private chartService: ChartService) {}

  ngOnInit() {
  }

}
