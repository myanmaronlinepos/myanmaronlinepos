import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router : Router,private dataFetchService : DataFetchService) {   }

  ngOnInit() {
   
    this.fetchData();
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
