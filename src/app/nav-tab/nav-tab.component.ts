import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css'],
  host: { 'class': 'position-relative', 'style': 'top:56px' }
})
export class NavTabComponent implements OnInit {
  active = 0;
  data: any = [];

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.dataObservable.subscribe((data: any) => {
      // console.log("Data Recevied ", data);
      this.data = data;
    })
    this.data = this.dataService.getData();
  }

  close($event: any, tab: any) {
    $event.stopPropagation();
    this.dataService.delete(tab.id);
    this.active = 0;
  }

}
