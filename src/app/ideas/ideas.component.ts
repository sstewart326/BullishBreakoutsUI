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

declare const TradingView: any;

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, AfterViewInit {

  @Input() charts: Charts;
  @ViewChild(ChartDirective, {static: true}) chartHost: ChartDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent(this.charts)
    document.documentElement.offsetHeight
    //TODO only load when in view.. driven by component; not html
  }

  ngAfterViewInit() {
    this.displayMoreCharts(0,3)
  }

  loadComponent(charts: Charts) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(charts.component);

    const viewContainerRef = this.chartHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ChartsComponent>componentRef.instance).data = charts.data;
  }

  displayMoreCharts(fromIndex: number, toIndex: number) {

    for ( let i = fromIndex; i<= toIndex; i++) {
      const datum = this.charts.data[i]
      new TradingView.chart({
        'container_id': datum.id,
        'chart': datum.chartId,
        'autosize': true
      })
    }

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    // console.log('offsetheight: ' + $event.target.documentElement.offsetHeight)
    // console.log('scrollTop: ' + $event.target.documentElement.scrollTop)
    // console.log('scrollHeight: ' + $event.target.documentElement.scrollHeight)
    // console.log('clientHeight: ' + $event.target.documentElement.clientHeight)
    //
    // console.log($event)
    if ($event.target.documentElement.clientHeight < $event.target.documentElement.scrollTop) {
      console.log("End");
    }
  }

}
