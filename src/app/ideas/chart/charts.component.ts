import {Component, Input} from "@angular/core";

@Component({
  styleUrls: ['./charts.component.css'],
  template: `
    <div *ngFor="let datum of data">
      <div [hidden]="shouldHide(datum.id)">
        <strong class="chart">{{datum.ticker}} - {{datum.date |  date:'MM/dd/yyyy'}}</strong>
        <div id="{{datum.id}}" class="chart"></div>
      </div>
    </div>
  `
})
export class ChartsComponent {
  @Input() data: any[];
  @Input() chartsLoaded: number

  shouldHide(chartId: string) {
    const chartNum = +chartId.split("-")[1]
    return this.chartsLoaded <= chartNum
  }

}
