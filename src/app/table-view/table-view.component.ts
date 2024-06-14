import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() data: any;

  dataChunks: any;

  page: number = 0;
  noOfPages: any = [];
  recordsPerPage: number = 5;
  startIndex: number = 0;

  ngOnInit(): void {
    if (this.data) {
      this.addPagination(1);
    }
  }

  addPagination(page: number) {
    this.noOfPages = Array.from({ length: Math.ceil(this.data.data.length / this.recordsPerPage) }, (_, index) => index + 1);
    let startIndex = ((page - 1) * this.recordsPerPage);
    let endIndex = startIndex + this.recordsPerPage;
    this.startIndex = startIndex;
    this.dataChunks = this.data.data.slice(startIndex, endIndex)
  }

}
