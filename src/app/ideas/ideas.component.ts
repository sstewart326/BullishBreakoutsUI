import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';
import {ChartsComponent} from "./chart/charts.component";
import {ChartService} from "../services/chart.service";

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('chartHost', {static: true, read: ViewContainerRef}) chartHost: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver, private chartService: ChartService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    const component = this.chartHost.createComponent(this.resolver.resolveComponentFactory(ChartsComponent))
    component.instance.dataObs = this.chartService.getCharts(1)
  }

}
