import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    dataObservable: any = new Subject();
    private data: any = [
        {
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
                },
                {
                    "Level": ""
                }
            ],
            "headers": [
                "Level",
                "Name",
                "TRU",
                "Population"
            ],
            "name": "Untitled spreadsheet - Sheet1.csv",
            "charts": [
                {
                    "type": "bar",
                    "xAxis": "Name",
                    "yAxis": "Population",
                    "height": 400,
                    "width": 1560,
                    "yScale":25
                }
            ]
        },
        {
            "name": "Untitled spreadsheet - Sheet1.csv",
            "data": [
                {
                    "Slno": "54774",
                    "MID": "37144001050956",
                    "TID": "59372539",
                    "Address_1": "\"no:331",
                    "Address_2": " palayamkottai road",
                    "State": " Near Curz Farnado Statue ",
                    "City": "TUTICORIN\"",
                    "PinCode": "TUTICORIN-628002",
                    "Cust_ID": "TAMIL NADU",
                    "Active_Deactive": "TUTICORIN",
                    "Date_of_Installation": "627414",
                    "SOLID": "866086805",
                    "Legal_name": "Active",
                    "DBA_name": "03/01/2019",
                    "Zone": "105",
                    "Merchant_mobile_number": "DAMRO",
                    "Final_Mobile": "LAKSHA FURN MART",
                    "Cluster": "South 2",
                    "SubCluster": "9842859944",
                    "AgentId": "9842859944",
                    "PrimarySecondary\r": "1"
                },
                {
                    "Slno": "54773",
                    "MID": "37244001050170",
                    "TID": "29578510",
                    "Address_1": "\"no:331",
                    "Address_2": " palayamkottai road",
                    "State": " Near Curz Farnado Statue ",
                    "City": "TUTICORIN\"",
                    "PinCode": "TUTICORIN-628002",
                    "Cust_ID": "TAMIL NADU",
                    "Active_Deactive": "TUTICORIN",
                    "Date_of_Installation": "627414",
                    "SOLID": "866086805",
                    "Legal_name": "Active",
                    "DBA_name": "11/03/2022",
                    "Zone": "105",
                    "Merchant_mobile_number": "DAMRO",
                    "Final_Mobile": "LAKSHA FURN MART",
                    "Cluster": "South 2",
                    "SubCluster": "9842859944",
                    "AgentId": "9842859944",
                    "PrimarySecondary\r": "1"
                },
                {
                    "Slno": "162168",
                    "MID": "37144020180180",
                    "TID": "93379817",
                    "Address_1": "\"NO 115/26 CORPORATION SHOPPING COMPLEX ARCOT ROAD",
                    "Address_2": "\"",
                    "State": "KODAMBAKKAM OPP TO PNB CHENNAI",
                    "City": "TAMIL NADU",
                    "PinCode": "CHENNAI",
                    "Cust_ID": "627416",
                    "Active_Deactive": "884533435",
                    "Date_of_Installation": "Active",
                    "SOLID": "19/07/2019",
                    "Legal_name": "2018",
                    "DBA_name": "NAANI ORGANICS",
                    "Zone": "KANITHYA EXPORTS",
                    "Merchant_mobile_number": "South 2",
                    "Final_Mobile": "9600364553",
                    "Cluster": "9600364553",
                    "SubCluster": "1",
                    "AgentId": "0",
                    "PrimarySecondary\r": "TBH"
                },
                {
                    "Slno": "162167",
                    "MID": "37244008660063",
                    "TID": "17576977",
                    "Address_1": "\"NO 22/17",
                    "Address_2": " 4TH MAIN ROAD",
                    "State": " UNITED INDIA COLONY\"",
                    "City": "\"KODAMBAKKAM",
                    "PinCode": " CHENNAI - 600024\"",
                    "Cust_ID": "TAMIL NADU",
                    "Active_Deactive": "CHENNAI",
                    "Date_of_Installation": "627416",
                    "SOLID": "884533435",
                    "Legal_name": "Active",
                    "DBA_name": "16/07/2021",
                    "Zone": "2018",
                    "Merchant_mobile_number": "NAANI ORGANICS",
                    "Final_Mobile": "KANITHYA EXPORTS",
                    "Cluster": "South 2",
                    "SubCluster": "9600364553",
                    "AgentId": "9600364553",
                    "PrimarySecondary\r": "1"
                },
                {
                    "Slno": "195587",
                    "MID": "37244020950106",
                    "TID": "25577767",
                    "Address_1": "NO 3 STC COLLEGE ROAD",
                    "Address_2": "PERUMALPURAM",
                    "State": "TAMIL NADU",
                    "City": "TIRUNELVELI",
                    "PinCode": "627414",
                    "Cust_ID": "848712685",
                    "Active_Deactive": "Active",
                    "Date_of_Installation": "23/11/2021",
                    "SOLID": "2095",
                    "Legal_name": "QUEEN BEE S FASHION DOT COM",
                    "DBA_name": "ANU",
                    "Zone": "South 2",
                    "Merchant_mobile_number": "8270111188",
                    "Final_Mobile": "9597688879",
                    "Cluster": "1",
                    "SubCluster": "0",
                    "AgentId": "TBH",
                    "PrimarySecondary\r": "Secondary\r"
                },
                {
                    "Slno": "114534",
                    "MID": "37044020950367",
                    "TID": "54378423",
                    "Address_1": "NO 5 175 5 KULATHU STREET",
                    "Address_2": "TIRUNELVELI",
                    "State": "TAMIL NADU",
                    "City": "TIRUNELVELI",
                    "PinCode": "627426",
                    "Cust_ID": "868514531",
                    "Active_Deactive": "Active",
                    "Date_of_Installation": "23/03/2018",
                    "SOLID": "2095",
                    "Legal_name": "KALIMUTHU K",
                    "DBA_name": "KALIMUTHU K",
                    "Zone": "South 2",
                    "Merchant_mobile_number": "",
                    "Final_Mobile": "9787606314",
                    "Cluster": "1",
                    "SubCluster": "0",
                    "AgentId": "TBH",
                    "PrimarySecondary\r": "Secondary\r"
                },
                {
                    "Slno": "224089",
                    "MID": "37144038920089",
                    "TID": "96371679",
                    "Address_1": "NO 127 MAIN ROAD NEAR BASKAR LODGE",
                    "Address_2": "KALLIDAIKURICHI",
                    "State": "TAMIL NADU",
                    "City": "TIRUNELVELI",
                    "PinCode": "627413",
                    "Cust_ID": "890954131",
                    "Active_Deactive": "Active",
                    "Date_of_Installation": "06/08/2019",
                    "SOLID": "3892",
                    "Legal_name": "SANTHOSH MOBILE",
                    "DBA_name": "KUMARAVEL",
                    "Zone": "South 2",
                    "Merchant_mobile_number": "9994861414",
                    "Final_Mobile": "9994440064",
                    "Cluster": "1",
                    "SubCluster": "0",
                    "AgentId": "TBH",
                    "PrimarySecondary\r": "Secondary\r"
                },
                {
                    "Slno": "63035",
                    "MID": "37244038920029",
                    "TID": "73570838",
                    "Address_1": "5/1 6 NO ROAD KALLIDAI",
                    "Address_2": "KURICHI",
                    "State": "TAMIL NADU",
                    "City": "TIRUNELVELI",
                    "PinCode": "627416",
                    "Cust_ID": "899386546",
                    "Active_Deactive": "Active",
                    "Date_of_Installation": "25/01/2021",
                    "SOLID": "3892",
                    "Legal_name": "DREAM SHOPPING",
                    "DBA_name": "SHERIF",
                    "Zone": "South 2",
                    "Merchant_mobile_number": "9514199909",
                    "Final_Mobile": "9514199909",
                    "Cluster": "1",
                    "SubCluster": "0",
                    "AgentId": "TBH",
                    "PrimarySecondary\r": "Secondary"
                }
            ],
            "headers": [
                "Slno",
                "MID",
                "TID",
                "Address_1",
                "Address_2",
                "State",
                "City",
                "PinCode",
                "Cust_ID",
                "Active_Deactive",
                "Date_of_Installation",
                "SOLID",
                "Legal_name",
                "DBA_name",
                "Zone",
                "Merchant_mobile_number",
                "Final_Mobile",
                "Cluster",
                "SubCluster",
                "AgentId",
                "PrimarySecondary\r"
            ]
        }
    ]

    setData(data: any) {
        this.data.push(data);
        this.dataObservable.next(this.data);
    }

    getData() {
        return this.data;
    }


}