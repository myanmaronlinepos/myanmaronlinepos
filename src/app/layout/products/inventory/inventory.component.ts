import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory } from 'src/app/share/models/Inventory';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from 'src/app/share/services/inventory.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { ExcelService } from 'src/app/excel.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['No', 'product_name', 'categoryname', 'quantity', 'actions'];
  items: any;
  data: any;
  dataSource: MatTableDataSource<Inventory>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  Updatequantity = '';
  // savequantity = ;
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  constructor(
    private dataFetchService:DataFetchService,
    private inventoryservice: InventoryService,
    private excelService: ExcelService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataFetchService.getAllInventory().subscribe(
      response => {
        console.log(response);
        this.items = response;
        this.data = response;
        this.dataSource = new MatTableDataSource<Inventory>(this.items);
        this.dataSource.paginator = this.paginator;
      },
      error => {
          console.log(error);
      }
    )
  }

  onUpdatequantity() {
    this.Updatequantity = (<HTMLInputElement>event.target).value;
  }
  Onaddvalue(row) {
    row.quantity = this.Updatequantity;
  }

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'inventory');
  }

}

