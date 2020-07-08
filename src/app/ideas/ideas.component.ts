import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentFactoryResolver,
  OnInit, ViewChild, ViewContainerRef,
} from '@angular/core';
import {ChartsComponent} from "./chart/charts.component";
import {ChartService} from "../services/chart.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild('chartHost', {static: true, read: ViewContainerRef}) chartHost: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver, private chartService: ChartService) { }

  totalCharts: Number
  pageIndex: number = 0
  pageSize: number = 10

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    this.fetchCharts()
  }

  loadNext(event: PageEvent) {
    this.totalCharts = 0
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.chartHost.clear()
    this.fetchCharts()
  }

  fetchCharts() {
    this.chartService.getCharts( this.pageIndex + 1, this.pageSize ).subscribe( meta => {
      window.scroll( 0, 0 )
      this.totalCharts = meta.total
      const component = this.chartHost.createComponent(this.resolver.resolveComponentFactory(ChartsComponent))
      component.instance.chartMeta = meta
    })
  }

}
