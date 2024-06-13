import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { DataService } from 'src/app/services/data.service';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  host: { 'class': 'mb-5 position-relative' }
})
export class ChartComponent implements OnInit {
  @ViewChild("chartPlace", { static: true, read: ViewContainerRef }) chartPlace: any;
  @Input() data: any
  constructor(private viewContainerRef: ViewContainerRef, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataObservable.subscribe((data: any) => {
      this.addCharts(this.data);
    })
    this.addCharts(this.data);
  }

  addCharts(data: any) {
    // console.log("Chart Place ", this.data);
    if (data['charts']) {
      this.chartPlace.clear();
      for (let i = 0; i < data['charts'].length; i++) {
        const component: Type<any> | null = this.getChart(data['charts'][i]['type']);
        if (component) {
          const view = this.viewContainerRef.createComponent(component);

          // set data
          view.instance["data"] = data.data;
          view.instance["property"] = data['charts'][i]
          view.instance["index"] = data.id + "_" + i;
          setTimeout(() => { view.instance.drawChart() }, 0);
          this.chartPlace.insert(view.hostView)
        }
      }

    }
  }

  getChart(componentName: string) {
    switch (componentName) {
      case "bar": return BarChartComponent
      case "pie": return PieChartComponent
      case "line": return LineChartComponent
      default: return null;
    }

  }

}
