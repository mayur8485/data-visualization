import { AfterViewInit, Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from '../services/data.service';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css'],
  host: { 'class': 'position-relative', 'style': 'top:56px' }
})
export class NavTabComponent implements OnInit, AfterViewInit {
  active = 0;
  data: any = [];

  constructor(private dataService: DataService, private viewContainerRef: ViewContainerRef) { }
  ngOnInit(): void {
    this.dataService.dataObservable.subscribe((data: any) => {
      console.log("Data Recevied ", data);
      this.data = data;
    })
    this.data = this.dataService.getData();;
  }

  ngAfterViewInit(): void {
    // this.addCharts();
  }

  close($event: any) {
    $event.stopPropagation();
    console.log("Close")
  }

}
