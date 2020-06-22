import {Component, OnInit} from '@angular/core';
import {ChartService} from "./services/chart.service";

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
