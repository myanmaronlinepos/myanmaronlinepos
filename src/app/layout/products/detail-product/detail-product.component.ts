import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
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

  displayedColumns: string[] = ['date', 'before', 'addQuantity', 'sellQuantity', 'after','cost','sale'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  id: string;
  allproduct: any;
  products: any;
  product: Product;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route:ActivatedRoute,
    private dataFetchService: DataFetchService
  ) {}
 
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.route.params.subscribe(
      (param:Params) => {
        this.id = param['product_id'];
       this.fetchData();
      }
    )
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

}

export interface PeriodicElement {
  date: string;
  before: number;
  addQuantity: number;
  sellQuantity: number;
  after: number;
  cost: number;
  sale: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600},
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600},
{ date: '1/7/2019', before:1000, addQuantity:10, sellQuantity:5, after:1005, cost:500, sale:600}
];
