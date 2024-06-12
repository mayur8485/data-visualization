import { Component, Input, OnInit, Renderer2, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @ViewChild("chartPlace", { static: true, read: ViewContainerRef }) chartPlace: any;
  @Input() data: any
  constructor(private viewContainerRef: ViewContainerRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.addCharts(this.data);
  }

  addCharts(data: any) {
    // console.log("Chart Place ", this.data);
    if (data['charts']) {
      for (let i = 0; i < data['charts'].length; i++) {
        const component: Type<any> | null = this.getChart(data['charts'][i]['type']);
        if (component) {
          const view = this.viewContainerRef.createComponent(component);
          console.log(view);
          view.instance["data"] = data.data;
          view.instance["property"] = data['charts'][i]
          view.instance["index"] = i
          setTimeout(() => { view.instance.drawChart() }, 0);
          this.chartPlace.insert(view.hostView)
        }
      }

    }
  }

  getChart(componentName: string) {
    switch (componentName) {
      case "bar": return BarChartComponent
      default: return null;
    }

  }

}
