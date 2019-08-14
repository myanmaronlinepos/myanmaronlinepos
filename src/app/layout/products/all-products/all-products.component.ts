import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';
import { EditProductComponent } from '../all-products/edit-product/edit-product.component'
import { DeleteTagService } from 'src/app/delete-tag.service';
import { ItemTag } from './deletetag/deletetag.component';
import { Category } from 'src/app/share/models/Category';
import { ExcelService } from 'src/app/excel.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  providers: [
  ]
})
export class AllProductsComponent implements OnInit {

  displayedColumns: string[] = ['product_id', 'product_name', 'category_id', 'tag_id', 'price_sell'];

  dataSource: any;
  categories: any;
  tags: any;
  allproduct:any;
  selected_category: any=[];
  category_filtr:any=[];
  selected_tag: any=[];
  tag_filtr: any=[];
  
  // quantity: string[] = ['less than 10', 'less than 20', 'less than 30', 'more than 50'];
  
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private dataFetchService: DataFetchService,
    public dialog: MatDialog,
    public edit: DeleteTagService
  ) { }

  ngOnInit() {
    this.fetchData();
  }


  getSelectedCategory(checkbox) {
    if (!this.selected_category.includes(checkbox)) {
      this.selected_category.push(checkbox);
      console.log(this.selected_category);
    } else {

      const index = this.selected_category.indexOf(checkbox);
      this.selected_category.splice(index, 1);
    }
    this.bindData();
  }

  bindData() {
    this.category_filtr=[];
    this.selected_category.forEach(item => {
       const result = this.allproduct.filter(element => {
       return element.category_name === item.category_name;
       });
       console.log("result.....");
       console.log(result);
       this.category_filtr=this.category_filtr.concat(result);
    });

    console.log("length="+this.selected_category.length);
    if(this.selected_category.length>0) {
      this.dataSource = new MatTableDataSource<Product>(this.category_filtr);
      this.dataSource.paginator = this.paginator;
      return;
    }
    
    this.dataSource = new MatTableDataSource<Product>(this.allproduct);
    this.dataSource.paginator = this.paginator;
  }

  getSelectedTag(tag) {
    if (!this.selected_tag.includes(tag)) {
      this.selected_tag.push(tag);
      console.log(this.selected_tag);
    } else {

      const index = this.selected_tag.indexOf(tag);
      this.selected_tag.splice(index, 1);
    }
    this.bindTagData();
  }

  bindTagData() {
    this.tag_filtr=[];
    this.selected_tag.forEach(item => {
       const result = this.allproduct.filter(element => {
       return element.tag_name === item.tag_name;
       });
       console.log("result.....");
       console.log(result);
       this.tag_filtr=this.tag_filtr.concat(result);
    });

    console.log("length="+this.selected_tag.length);
    if(this.selected_tag.length>0) {
      this.dataSource = new MatTableDataSource<Product>(this.tag_filtr);
      this.dataSource.paginator = this.paginator;
      return;
    }
    
    this.dataSource = new MatTableDataSource<Product>(this.allproduct);
    this.dataSource.paginator = this.paginator;
  }

  // onEdit(action, obj): void {

  //   // this.categoryservice.setCategory(row);
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(EditProductComponent, {
  //     width: '900px',
  //     height: '1300px',
  //     data: obj
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result.event == 'Edit') {
  //       this.editRowData(result.data);
  //     }
  //   });
  // }
  // editRowData(row_obj) {
  //   this.dataSource = this.dataSource.filter((value, key) => {
  //     if (value.id == row_obj.id) {
  //       value.product_name = row_obj.product - name;
  //       value.category_id = row_obj.category_id;
  //       value.tag_id = row_obj.tag_id;

  //     }
  //     return true;
  //   });
  // }

  fetchData() {

    //fetch all category data
    this.dataFetchService.getAllCategory().subscribe(
      response => {
        this.categories=response;
      },
      error => {
        console.log(error);
      }
    )

    //fetch all tag data
    this.dataFetchService.getAllTag().subscribe(
      response => {
        this.tags= response;
      },
      error => {
        console.log(error);
      }
    )

    // fetch all product data
    this.dataFetchService.getAllProduct().subscribe(
      response => {
    
        this.allproduct=response;
        console.log(response);
        this.dataSource = new MatTableDataSource<Product>(this.allproduct);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }

  productDetail(id: number) {
    this.router.navigate(['/dashboard/products/detailproduct', id]);
  }

}
