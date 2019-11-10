import {Component, Input} from "@angular/core";

@Component({
  template: `
    <div id="{{data.id}}" class="chart"></div>
  `
})
export class ChartComponent {
  @Input() data: any;
}
