import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';
import { Inventory } from 'src/app/share/models/Inventory';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/share/services/inventory.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

displayedColumns: string[] = ['product_id', 'name', 'category', 'quantity','actions'];
items: Inventory[]=[];
dataSource: MatTableDataSource<Inventory>;
@ViewChild(MatPaginator) paginator: MatPaginator;

Updatequantity='';
savequantity='';
fileToUpload: File = null;

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}
constructor(
  private route: ActivatedRoute,
  private activatedRoute: ActivatedRoute,
  private inventoryservice:InventoryService
) { }

ngOnInit() {
  this.items=this.inventoryservice.getItems();
  this.dataSource = new MatTableDataSource<Inventory>(this.items);
  this.dataSource.paginator = this.paginator;
   }
onUpdatequantity(){
     this.Updatequantity=(<HTMLInputElement>event.target).value;
     }
Onaddvalue(element){
       console.log(element.savequantity);
    return this.savequantity=this.Updatequantity;
      }
     

}

