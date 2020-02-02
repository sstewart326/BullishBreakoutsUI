import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  HostListener,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {Charts} from "./chart/charts";
import {ChartDirective} from "../directives/chart.directive";
import {ChartsComponent} from "./chart/charts.component";
import {ChartService} from "../services/chart.service";

declare const TradingView: any;

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, AfterViewInit {

  @ViewChild(ChartDirective, {static: true}) chartHost: ChartDirective;

  charts: Charts;
  chartComponent: ChartsComponent
  chartsToShow = 5

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private chartService: ChartService) { }

  ngOnInit() {
    this.charts = this.chartService.getCharts()
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.charts.component);
    const viewContainerRef = this.chartHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.chartComponent = <ChartsComponent>componentRef.instance
    this.chartComponent.data = this.charts.data;
  }

  ngAfterViewInit() {
    this.displayMoreCharts(0)
  }

  displayMoreCharts(fromIndex: number) {
    const toIndex = fromIndex + this.chartsToShow - 1
    for ( let i = fromIndex; i<= toIndex; i++) {
      if (i > this.charts.data.length - 1) return
      const datum = this.charts.data[i]
      new TradingView.chart({
        'container_id': datum.id,
        'chart': datum.chartId,
        'autosize': true
      })
      this.chartComponent.chartsLoaded = toIndex + 1
    }
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.displayMoreCharts( this.chartComponent.chartsLoaded )
    }
  }

}
