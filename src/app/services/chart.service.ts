import {Injectable} from "@angular/core";
import {Chart} from "../ideas/chart/chart";
import {ChartComponent} from "../ideas/chart/chart.component";

@Injectable( {providedIn: 'root'} )
export class ChartService {

  getCharts() {
    return [
      new Chart(ChartComponent, {id: 'chart', chartId: '1tow4LOg'}),

      new Chart(ChartComponent, {id: 'chart1', chartId: '1tow4LOg'}),

      new Chart(ChartComponent, {id: 'chart2', chartId: '1tow4LOg'}),

      new Chart(ChartComponent, {id: 'chart3', chartId: '1tow4LOg'})
    ];
  }

}
