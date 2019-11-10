import {Injectable} from "@angular/core";
import {Charts} from "../ideas/chart/charts";
import {ChartsComponent} from "../ideas/chart/charts.component";

@Injectable( {providedIn: 'root'} )
export class ChartService {

  getCharts() {
    return new Charts(ChartsComponent, [{id: 'chart', chartId: '1tow4LOg'}, {id: 'chart1', chartId: '1tow4LOg'}, {id: 'chart2', chartId: '1tow4LOg'}, {id: 'chart3', chartId: '1tow4LOg'}]);
  }

}
