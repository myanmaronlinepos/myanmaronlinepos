import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Inventory } from 'src/app/share/models/Inventory';
import { ActivatedRoute } from '@angular/router';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

displayedColumns: string[] = ['No', 'product_name','category_name','quantity','actions'];
items: Inventory[]=[];
dataSource: MatTableDataSource<Inventory>;
@ViewChild(MatPaginator) paginator: MatPaginator;

Updatequantity='';
// savequantity='';
fileToUpload: File = null;

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}
constructor(
  private route: ActivatedRoute,
  private activatedRoute: ActivatedRoute,
  private dataFetchService : DataFetchService
  ) { }

ngOnInit() {
  this.fetchData();
   }
onUpdatequantity(){
     this.Updatequantity=(<HTMLInputElement>event.target).value;
     }
Onaddvalue(row){
    row.quantity=this.Updatequantity;
      }
     
      fetchData() {
        this.dataFetchService.getInventory().subscribe(
          response => {
            console.log(response);
            this.dataSource = new MatTableDataSource<Inventory>(response);
            this.dataSource.paginator = this.paginator;
          },
          error => {
  
          }
        )
      }
}

