import {Component, Input} from "@angular/core";

@Component({
  styleUrls: ['./charts.component.css'],
  template: `
    <div *ngFor="let datum of data">
      <div id="{{datum.id}}" class="chart"></div>
    </div>
  `
})
export class ChartsComponent {
  @Input() data: any[];
}
