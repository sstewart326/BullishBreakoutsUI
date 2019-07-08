import {Component, OnInit} from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    new TradingView.chart({
      'container_id': 'chart',
      'width': 790,
      'height': 475,
      'chart': '1tow4LOg'
    })
    new TradingView.chart({
      'container_id': 'chart1',
      'width': 790,
      'height': 475,
      'chart': 'XqGo4QHc'
    })

  }

}
