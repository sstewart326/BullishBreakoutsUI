import {Component} from "@angular/core";
import {ChartMeta} from "../../interfaces/chart-meta.interface";
import {Observable} from "rxjs";

@Component({
  styleUrls: ['./charts.component.css'],
  template: `
    <div *ngIf="dataObs | async as data">
      <div *ngFor="let datum of data.meta">
        <div class="chart-content">
          <div class="ticker">
            <h2>SPY</h2>
          </div>
          <div class="date">
            <h4>06/23/2020</h4>
          </div>
          <img src="http://localhost:2900/charts/{{datum.id}}" style="width:1000px;height:600px;" class="chart"/>
        </div>
      </div>
    </div>
  `
})
export class ChartsComponent {

  dataObs: Observable<ChartMeta>;

}
