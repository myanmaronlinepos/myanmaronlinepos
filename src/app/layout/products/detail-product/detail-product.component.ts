import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { Product } from 'src/app/share/models/Product';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  displayedColumns: string[] = ['date', 'product_name', 'quantity', 'price_cost', 'price_sell', 'total_cost', 'total_sell', 'profit'];
  dataSource: any;
  id: string;
  imgSrc:any;

  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private route:ActivatedRoute,
    private dataFetchService: DataFetchService,
    private sanitizer:DomSanitizer
  ) {}
 
  ngOnInit() {
    this.id=this.route.snapshot.params['product_id'];
    this.imgSrc="assets/product.jpg";
    
    if(this.id) {
      this.fetchProductData();
      this.fetchImage();
    }

    this.route.params.subscribe(
      (param:Params) => {
        this.id = param['product_id'];
        this.fetchProductData();
      }
    );
  }

  fetchImage() {
    this.dataFetchService.getProductImage(this.id).subscribe(
      response => {
        let objectURL = URL.createObjectURL(response);       
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    )
  }


  fetchProductData() {
    this.dataFetchService.getSellHistory().subscribe(
      response => {
        console.log(response);

        const result = response.filter(element => {
          return element.product_id == this.id;
          });

        this.dataSource = new MatTableDataSource<any>(result);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    )
  }

}
