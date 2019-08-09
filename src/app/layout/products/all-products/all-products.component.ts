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
import { Category } from 'src/app/share/models/Category';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  providers: [
  ]
})
export class AllProductsComponent implements OnInit {
  
  displayedColumns: string[] = ['product_id', 'product_name', 'category_id','tag_id','price_sell'];
  
  dataSource:any;
  categories:any;
  selected_category:any;
  tag: string[]=['3 buy 1 gift','for all','for 18+'];
  quantity: string[]=['less than 10','less than 20','less than 30','more than 50'];
  selected:boolean=false;
  
  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private dataFetchService : DataFetchService,
    public dialog: MatDialog,
    public edit:DeleteTagService
    ){ }

  ngOnInit() {
    this.fetchData();
    this.selected_category=this.fetchData();
  }
  

  getSelected() {
    this.selected_category = this.dataSource.filter(s => {
      return s.selected;
    });
    console.log(this.selected_category);
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
      this.dataSource = this.dataSource.filter((value,key)=>{
       if(value.id == row_obj.id){
         value.product_name=row_obj.product-name;
         value.category_id =row_obj.category_id;
         value.tag_id=row_obj.tag_id;
    
       }
       return true;
      });
    }

    fetchData() {
      this.dataFetchService.getAllProduct().subscribe(
        response => {
          console.log(response);
          this.categories=response;
          this.dataSource = new MatTableDataSource<Product>(response);
          this.dataSource.paginator = this.paginator;
        },
        error => {

        }
      )
    }

    productDetail(id: number) {
      this.router.navigate(['/dashboard/products/detailproduct',id]);
    }
  
}
