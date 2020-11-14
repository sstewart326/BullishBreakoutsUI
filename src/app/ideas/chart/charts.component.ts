import {Component} from "@angular/core";
import {ChartMeta} from "../../interfaces/chart-meta.interface";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Component({
  styleUrls: ['./charts.component.css'],
  template: `
    <div *ngIf="chartMeta">
      <div *ngFor="let datum of chartMeta.meta">
        <div class="content-wrapper">
          <div class="chart-content">
            <div class="chart-border">
              <div class="chart-meta">
                <div class="meta-text">
                  <h2>{{datum.ticker}}</h2>
                </div>
                <div class="meta-text">
                  <h5>{{datum.date}}</h5>
                </div>
              </div>
              <div class="chart-wrapper">
                <img src="${environment.serviceBase}/charts/{{datum.key}}" class="chart"/>
              </div>
              <div class="chart-padding"></div>
            </div>
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
