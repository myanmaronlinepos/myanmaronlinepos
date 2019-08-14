import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  displayedColumns: string[] = ['date', 'product_name', 'quantity', 'price_cost', 'price_sell', 'total_cost', 'total_sell', 'profit'];
  dataSource: any;
  id: string;
  allproduct: any;
  products: any;
  product: Product;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route:ActivatedRoute,
    private dataFetchService: DataFetchService
  ) {}
 
  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        this.id = param['product_id'];
       this.fetchData();
      }
    );
    this.fetchProductData();
  }

  fetchData() {
    this.dataFetchService.getAllProduct().subscribe(
      response => {
        this.products=response;
        console.log(this.products);
        const product_id=parseInt(this.id);
        this.products.forEach((p: Product) => {
          if (p.product_id == product_id ) {
            this.product = p;
          }
        });
      },
      error => {
        console.log(error);
      }
    )
  }

  fetchProductData() {
    this.dataFetchService.getSellHistory().subscribe(
      response => {
        this.dataSource = new MatTableDataSource<any>(response);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }

}
