import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';
import {EditProductComponent } from '../all-products/edit-product/edit-product.component'
import { DeleteTagService } from 'src/app/delete-tag.service';
import { ItemTag } from './deletetag/deletetag.component';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  providers: [
  ]
})
export class AllProductsComponent implements OnInit {
  
  displayedColumns: string[] = ['product_id', 'product_name', 'category_id','tag_id','price_sell'];
  tags:ItemTag[]=[];
  dataSource:any;
  category: string[]=['coffee','cookie','juices','bread','medicine','sugar','chips','oil','cake'];
  tag: string[]=['3 buy 1 gift','for all','for 18+'];
  quantity: string[]=['less than 10','less than 20','less than 30','more than 50'];
  datas: MatTableDataSource<ItemTag>;
  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router,private dataFetchService : DataFetchService,
      public dialog: MatDialog,
      public edit:DeleteTagService
      ){   }

  ngOnInit() {
   
    this.fetchData();
    
    }
    
    onEdit(action, obj):void {
    
      // this.categoryservice.setCategory(row);
      obj.action=action;
      const dialogRef=this.dialog.open(EditProductComponent,{
         width: '900px',
         height: '1300px',
         data: obj
      });
      dialogRef.afterClosed().subscribe(result=> {
        if(result.event=='Edit') {
          this.editRowData(result.data);
        }
      });
    }
    editRowData(row_obj) {
      this.tags = this.tags.filter((value,key)=>{
        if(value.id == row_obj.id){
          value.productname = row_obj.productname;
          value.tag = row_obj.tag;
        }
        return true;
      });
    }

    fetchData() {
      this.dataFetchService.getAllProduct().subscribe(
        response => {
          console.log(response);
          this.dataSource = new MatTableDataSource<Product>(response);
          this.dataSource.paginator = this.paginator;
        },
        error => {

        }
      )
    }
  
}
