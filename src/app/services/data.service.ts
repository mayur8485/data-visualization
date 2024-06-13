import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    dataObservable: any = new Subject();
    private data: any = [
        {
            "id": "9876543210",
            "data": [
                {
                    "Level": "India",
                    "Name": "India",
                    "TRU": "Total",
                    "Population": "17"
                },
                {
                    "Level": "India",
                    "Name": "JAMMU & KASHMIR",
                    "TRU": "Rural",
                    "Population": "14"
                },
                {
                    "Level": "India",
                    "Name": "HIMACHAL PRADESH",
                    "TRU": "Urban",
                    "Population": "10"
                },
                {
                    "Level": "STATE",
                    "Name": "PUNJAB",
                    "TRU": "Total",
                    "Population": "19"
                },
                {
                    "Level": "STATE",
                    "Name": "CHANDIGARH",
                    "TRU": "Rural",
                    "Population": "10"
                },
                {
                    "Level": "STATE",
                    "Name": "UTTARAKHAND",
                    "TRU": "Urban",
                    "Population": "17"
                },
                {
                    "Level": "STATE",
                    "Name": "HARYANA",
                    "TRU": "Total",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "NCT OF DELHI",
                    "TRU": "Rural",
                    "Population": "12"
                },
                {
                    "Level": "STATE",
                    "Name": "RAJASTHAN",
                    "TRU": "Urban",
                    "Population": "20"
                },
                {
                    "Level": "STATE",
                    "Name": "UTTAR PRADESH",
                    "TRU": "Total",
                    "Population": "19"
                },
                {
                    "Level": "STATE",
                    "Name": "BIHAR",
                    "TRU": "Rural",
                    "Population": "12"
                },
                {
                    "Level": "STATE",
                    "Name": "SIKKIM",
                    "TRU": "Urban",
                    "Population": "13"
                },
                {
                    "Level": "STATE",
                    "Name": "ARUNACHAL PRADESH",
                    "TRU": "Total",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "NAGALAND",
                    "TRU": "Rural",
                    "Population": "17"
                },
                {
                    "Level": "STATE",
                    "Name": "MANIPUR",
                    "TRU": "Urban",
                    "Population": "18"
                },
                {
                    "Level": "STATE",
                    "Name": "MIZORAM",
                    "TRU": "Total",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "TRIPURA",
                    "TRU": "Rural",
                    "Population": "13"
                },
                {
                    "Level": "STATE",
                    "Name": "MEGHALAYA",
                    "TRU": "Urban",
                    "Population": "15"
                },
                {
                    "Level": "STATE",
                    "Name": "ASSAM",
                    "TRU": "Total",
                    "Population": "20"
                },
                {
                    "Level": "STATE",
                    "Name": "WEST BENGAL",
                    "TRU": "Rural",
                    "Population": "20"
                },
                {
                    "Level": "STATE",
                    "Name": "JHARKHAND",
                    "TRU": "Urban",
                    "Population": "13"
                },
                {
                    "Level": "STATE",
                    "Name": "ODISHA",
                    "TRU": "Total",
                    "Population": "14"
                },
                {
                    "Level": "STATE",
                    "Name": "CHHATTISGARH",
                    "TRU": "Rural",
                    "Population": "18"
                },
                {
                    "Level": "STATE",
                    "Name": "MADHYA PRADESH",
                    "TRU": "Urban",
                    "Population": "14"
                },
                {
                    "Level": "STATE",
                    "Name": "GUJARAT",
                    "TRU": "Total",
                    "Population": "11"
                },
                {
                    "Level": "STATE",
                    "Name": "DAMAN & DIU",
                    "TRU": "Rural",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "DADRA & NAGAR HAVELI",
                    "TRU": "Urban",
                    "Population": "12"
                },
                {
                    "Level": "STATE",
                    "Name": "MAHARASHTRA",
                    "TRU": "Total",
                    "Population": "14"
                },
                {
                    "Level": "STATE",
                    "Name": "ANDHRA PRADESH",
                    "TRU": "Rural",
                    "Population": "20"
                },
                {
                    "Level": "STATE",
                    "Name": "KARNATAKA",
                    "TRU": "Urban",
                    "Population": "15"
                },
                {
                    "Level": "STATE",
                    "Name": "GOA",
                    "TRU": "Total",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "LAKSHADWEEP",
                    "TRU": "Rural",
                    "Population": "16"
                },
                {
                    "Level": "STATE",
                    "Name": "KERALA",
                    "TRU": "Urban",
                    "Population": "15"
                },
                {
                    "Level": "STATE",
                    "Name": "TAMIL NADU",
                    "TRU": "Total",
                    "Population": "12"
                },
                {
                    "Level": "STATE",
                    "Name": "PUDUCHERRY",
                    "TRU": "Rural",
                    "Population": "20"
                },
                {
                    "Level": "STATE",
                    "Name": "ANDAMAN & NICOBAR ISLANDS",
                    "TRU": "Urban",
                    "Population": "17"
                }
            ],
            "headers": [
                {
                    "key": "Level",
                    "value": "Level"
                },
                {
                    "key": "Name",
                    "value": "Name"
                },
                {
                    "key": "TRU",
                    "value": "TRU"
                },
                {
                    "key": "Population",
                    "value": "Population"
                }
            ],
            "name": "Untitled spreadsheet - Sheet1.csv",
            "charts": [
                {
                    "type": "bar",
                    "xAxis": "Name",
                    "yAxis": "Population",
                    "height": 400,
                    "width": 1560,
                    "yScale": 25
                },
                {
                    "type": "pie",
                    "xAxis": "TRU",
                    "yAxis": "Population",
                    "height": 500,
                    "width": 450,
                    "radius": 220,
                    "fontsize": 20
                },
                {
                    "type": "line",
                    "xAxis": "Population",
                    "yAxis": "Population",
                    "height": 400,
                    "width": 1560
                  }
            ]
        }
    ]

    addChart(id: any, property: any) {
        if (this.data) {
            this.data.forEach((each: any) => {
                if (each.id === id) {
                    if (!each['charts']) each['charts'] = [];
                    each['charts'].push(property);
                }
            });
            this.dataObservable.next(this.data);
        }
    }

    setData(data: any) {
        this.data.push(data);
        this.dataObservable.next(this.data);
    }

    getData() {
        return this.data;
    }

    delete(id: any) {
        this.data = this.data.filter((each: any) => each.id !== id);
        this.dataObservable.next(this.data);
    }

}