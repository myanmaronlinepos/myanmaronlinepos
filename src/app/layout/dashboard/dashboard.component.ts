import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';
import  dayGridPlugin  from "@fullcalendar/daygrid";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  calendarPlugins=[dayGridPlugin];
  LineChart:any=[];
  BarChart:any=[];
  PieChart:any=[];
  RadarChart:any=[];
  AreaChart:any=[];
constructor() { }
ngOnInit() {
   
    this.RadarChart=new Chart('radarChart',{
      type:'radar',
      data:{
       labels:["January","February","March","April", "May"],
        datasets:[
          {
          label:'Cost',
          data:[1,2,2,4,2],
            backgroundColor:"#A9A9A9",
            borderColor:'#A9A9A9',
            borderWidth:[1,1,1,1,1]
          
        },
        {
          label:'Profit',
          data:[3,0,1,1,2],
           backgroundColor:"#F4A460",
          //  ["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:'#F4A460',
          borderWidth:[1,1,1,1,1]
          
        },
        {
          label:'Income',
          data:[4,2,3,5,4],
          backgroundColor:'#2E8B57',
          // ["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:'#2E8B57',
          borderWidth:[1,1,1,1,1]
          
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
        labels:["Qtr1","Qtr2","Qtr3","Qtr4", "Qtr5"],
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
    this.PieChart=new Chart('pieChart2',{
      type:'pie',
      data:{
        labels:["Qtr1","Qtr2","Qtr3","Qtr4", "Qtr5"],
        datasets:[{
          label:'Profit',
          data:[20,10,20,40,30],
          backgroundColor:["#DEB887","#A9A9A9","#DC143C","#F4A460", "#2E8B57"],
          borderColor:["#CDA776","#989898","#CB252B","#E39371","1D7A46"],
          borderWidth:[1,1,1,1,1]
          
        }]
      },
      options:{
        title:{
          text:"Profit",
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
          backgroundColor:'#A9A9A9',
          borderColor:'#A9A9A9',
          borderWidth:1
      },  
      {
        label:'Income',
        data:[4,1,2,3,5],
        backgroundColor:'#2E8B57',
        borderColor:'#2E8B57',
        borderWidth:[1,1,1,1,1]
        
      },
      {
        label:'Profit',
        data:[4,4,2,5,1],
        backgroundColor:'#F4A460',
        borderColor:'#F4A460',
        borderWidth:[1,1,1,1,1]
        
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
          data:[3,2,7,4,9],
          // fill:false,
          // lineTension:0.2,
          borderColor:"#2E8B57",
          backgroundColor:"#2E8B57",
          borderWidth:1
        },
        {
          label:'Cost',
          data:[5,3,8,6,7],
          // fill:false,
          // lineTension:0.2,
          borderColor:"#A9A9A9",
          backgroundColor:"#A9A9A9",
          borderWidth:1
        },
        {
          label:'Profit',
          data:[5,6,3,7,3],
          // fill:false,
          // lineTension:0.2,
          borderColor:"#F4A460",
          backgroundColor:"#F4A460",
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

 