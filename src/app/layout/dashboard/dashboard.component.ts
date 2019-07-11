import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import  dayGridPlugin  from "@fullcalendar/daygrid";
// For MDB Angular Pro
// import { ChartsModule, ChartSimpleModule, WavesModule } from 'ng-uikit-pro-standard';
// For MDB Angular Free
// import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  calendarPlugins=[dayGridPlugin];
  // title="This is our profit";
  LineChart:any=[];
  BarChart:any=[];
  PieChart:any=[];
  RadarChart:any=[];
  AreaChart:any=[];
  // labels:string[]  = ["January","February","March","April", "May"] ;

 constructor() { }

  ngOnInit() {
   
    this.RadarChart=new Chart('radarChart',{
      type:'radar',
      data:{
       labels:["January","February","March","April", "May"],
        datasets:[
          {
          label:'Cost',
          data:[1,2,5,4,5],
          //  backgroundColor:"#fff",
          //  ["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:'#0000FF',
          // borderWidth:[1,1,1,1,1]
          
        },
        {
          label:'Income',
          data:[4,1,2,3,5],
          // backgroundColor:["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:'#FF0000',
          // borderWidth:[1,1,1,1,1]
          
        }
      ]
      },
      options:{
        title:{
          text:" ",
          display:true
        },
// scales:{
//   yAxes:[{
//     ticks:{
//       beginAtZero:true
//     }
//   }]
// }
}
    });
    this.PieChart=new Chart('pieChart',{
      type:'pie',
      data:{
        labels:["January","February","March","April", "May"],
        datasets:[{
          label:'Cost',
          data:[40,10,20,0,30],
          backgroundColor:["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:["#CDA776","#989898","#CB252B","#E39371","1D7A46"],
          borderWidth:[1,1,1,1,1]
          
        }]
      },
      options:{
        title:{
          text:" Cost",
          display:true
        },
// scales:{
//   yAxes:[{
//     ticks:{
//       beginAtZero:true
//     }
//   }]
// }
}
    });
    this.PieChart=new Chart('pieChart1',{
      type:'pie',
      data:{
        labels:["Qtr1","Qtr2","Qtr3","Qtr4", "Qtr5"],
        datasets:[{
          label:'Income',
          data:[20,10,20,40,30],
          backgroundColor:["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:["#CDA776","#989898","#CB252B","#E39371","1D7A46"],
          borderWidth:[1,1,1,1,1]
          
        }]
      },
      options:{
        title:{
          text:"Income",
          display:true
        },
// scales:{
//   yAxes:[{
//     ticks:{
//       beginAtZero:true
//     }
//   }]
// }
}
    });
    // this is barchrt
    this.BarChart=new Chart('barChart',{
      type:'bar',
      data:{
        labels:["January","February","March","April", "May"],
        datasets:[
          {
          label:'Cost',
          data:   [ 5,3,1,2,4],
          backgroundColor:'#0000ff',
          borderColor:'#0000ff',
          borderWidth:1
      },  
      {
        label:'Income',
        data:[4,1,2,3,5],
        backgroundColor:'#FF0000',
        borderColor:'#FF0000',
        // borderWidth:[1,1,1,1,1]
        
      }
    ]
    },
      options:{
        title:{
          text:" ",
          display:true
        },
scales:{
  yAxes:[{
    ticks:{
      beginAtZero:true
    }
  }]
}
}
    });

    this.LineChart=new Chart('lineChart',{
      type:'line',
      data:{
        labels:["January", "Febuary", "Merch", "April" , "May" ],
        datasets:[
          {
          label:'Income',
          data:[3,2,7,4,5],
          // fill:false,
          // lineTension:0.2,
          borderColor:"red",
          // backgroundColor:"red",
          borderWidth:1
        },
        {
          label:'Cost',
          data:[5,3,8,6,7],
          // fill:false,
          // lineTension:0.2,
          borderColor:"blue",
          // backgroundColor:"blue",
          borderWidth:1
        },
      ]
      },
      options:{
        title:{
          text:" ",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
   
  
  }
}

 