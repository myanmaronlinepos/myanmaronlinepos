import { Component, OnInit } from '@angular/core';
import  dayGridPlugin  from "@fullcalendar/daygrid";
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import interactionPlugin from '@fullcalendar/interaction';
import { MatCalendarCellCssClasses } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  start_date="2019-08-11";
  end_date="2019-08-17";
  selectedDate:any;
  selectionStatus=0;

  LineChart:any=[];
  BarChart:any=[];
  PieChart:any=[];
  RadarChart:any=[];
  AreaChart:any=[];
  labels=["January","February","March","April", "May","June","July"];

  costData=[2,9,3,1,2,7,9];
  profitData=[5,8,2,7,2,7,5];
  sellData=[3,8,6,4,9,1,8];

  eachDataColor=[
    {
      backgroundColor:["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57","#F4A360", "#2E8257"]
    }
  ]

  pieChartType="pie";


compareData=[{data:this.sellData,label:"sell"},
            {data:this.costData ,label:"Cost"},
            {data:this.profitData,label:"Profit"}];

 compareBarChartType = "bar";
 compareLineChartType="line";
 compareRadarChartType="radar";
 compareChartLegend = true;

 compareCharColor=[
   {
    backgroundColor:'#A9A9A9'
   },
   {
    backgroundColor:'#2E8B57'
   },
   {
    backgroundColor:'#F4A460'
   }
 ];

 chartOption = {
  responsive: true,
};
  
constructor(
  private dataFetchData:DataFetchService
) { }
ngOnInit() {
   this.fetchData();
   
  }

  fetchData() {
    this.dataFetchData.getDashBoardLabels().subscribe(
      response => {
        console.log(response);
        
        this.labels=response;
        // this.compareData=[{data:[2,3,1,5,3,7,2]}];
      },
      error => {
        console.log(error);
      }
    );


    this.dataFetchData.getDashBoardData(this.start_date,this.end_date).subscribe(
      response => {
        console.log(response);
        this.costData=response.costData;
        this.sellData=response.sellData;
        this.profitData=response.profitData;
        this.compareData=[
                        {data:this.sellData,label:"sell"},
                        {data:this.costData ,label:"Cost"},
                        {data:this.profitData,label:"Profit"}
                      ];
      },
      error => {
        console.log(error);
      }
    );
  }

  onSelect(event){
    console.log(event);
    this.selectedDate=event;
    console.log(this.selectionStatus);

    switch(this.selectionStatus) {
      case 0:
        this.selectionStatus++;
        const startTime=new Date(event);
        this.start_date=startTime.toISOString();
        break;
      case 1:
        const endTime=new Date(event);
        this.end_date=endTime.toISOString();
        console.log("start_date="+this.start_date);
        console.log("end_date="+this.end_date);
        this.selectionStatus=0;
        this.fetchData();
        break;
    }

  }


}

 