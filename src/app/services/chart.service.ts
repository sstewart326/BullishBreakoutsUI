import {Injectable} from "@angular/core";
import {Charts} from "../ideas/chart/charts";
import {ChartsComponent} from "../ideas/chart/charts.component";

@Injectable( {providedIn: 'root'} )
export class ChartService {

  index = 0

  getCharts() {
    return new Charts(ChartsComponent, [
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'},
      {id: `chart-${this.index++}`, chartId: '1tow4LOg', ticker: 'BZX', date: '2019-07-03'}
      ]);
  }

}
