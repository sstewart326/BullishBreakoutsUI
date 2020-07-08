import {Component} from "@angular/core";
import {ChartMeta} from "../../interfaces/chart-meta.interface";
import {Observable} from "rxjs";

@Component({
  styleUrls: ['./charts.component.css'],
  template: `
    <div *ngIf="chartMeta">
      <div *ngFor="let datum of chartMeta.meta">
        <div class="border-wrapper chart-border rounded">
          <div class="border-wrapper chart-border rounded">
            <div class="chart-content">
              <div class="chart-meta">
                <div class="ticker">
                  <h2>{{datum.ticker}}</h2>
                </div>
                <div class="date">
                  <h5>{{datum.date}}</h5>
                </div>
              </div>
              <div class="content-wrapper">
                  <div class="border-wrapper chart-border">
                    <img src="http://localhost:2900/charts/{{datum.key}}" class="chart chart-border"/>
                  </div>
              </div>
            </div>
            <div class="chart-padding"></div>
          </div>
        </div>
        <div class="content-padding"></div>
      </div>
    </div>
  `
})
export class ChartsComponent {

  chartMeta: ChartMeta;

}
