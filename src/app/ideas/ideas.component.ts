import { Component, HostListener, OnInit } from '@angular/core';

declare const TradingView: any;

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  showMyElement: boolean;

  constructor(
  ) { }


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

  ngOnInit() {
    document.documentElement.offsetHeight
    //TODO only load when in view.. driven by component; not html
    const element = new TradingView.chart({
      'container_id': 'chart',
      'chart': '1tow4LOg',
      'autosize': true
    })
    console.log(element)
    new TradingView.chart({
      'container_id': 'chart1',
      'chart': '1tow4LOg',
      'autosize': true
    })
    new TradingView.chart({
      'container_id': 'chart2',
      'chart': '1tow4LOg',
      'autosize': true
    })
    new TradingView.chart({
      'container_id': 'chart3',
      'chart': '1tow4LOg',
      'autosize': true
    })

  }

}
