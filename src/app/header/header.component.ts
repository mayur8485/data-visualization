import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataservice: DataService) { }

  saveData(data: any) {
    this.dataservice.setData(data);
  }

  parseCSV(csvContent: any, name: string) {
    let lines = csvContent.split('\n');
    let headers = lines[0].split(',');
    console.log('headers ', headers)
    let header_: any = [];
    var rows: any = [];

    lines.slice(1).forEach((line: any) => {
      if (line.length > 0) {
        let values = line.split(',');
        let row: any = {};
        headers.forEach((header: any, index: any) => {
          row[header] = values[index];
        });
        rows.push(row);
      }
    })

    headers.forEach((header: any) => {
      header_.push(
        {
          "key": header,
          "value": header
        }
      )
    });

    return { data: rows, headers: header_, name: name, id: Math.floor(Math.random() * 10000000000) }
  }

  onAddData($event: any) {
    const file = $event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = (e: any) => {
        console.log(e);
        const csvContent = e?.target?.result as string;
        const data: any = this.parseCSV(csvContent, file.name);
        this.saveData(data)

        $event.target.value = ""
      }
      reader.onerror = function (e: any) {
        console.log("Error in reading file ", e);
      }
      reader.readAsText(file);
    } else {
      console.log("Uable to read file..")
    }
  }

}
