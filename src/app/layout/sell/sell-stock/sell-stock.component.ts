import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { SellService } from 'src/app/share/services/sell.service';
import { SellProduct } from 'src/app/share/models/SellProduct';
import { SellItem } from 'src/app/share/models/SellItem';

@Component({
  selector: 'app-sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.scss']
})
export class SellStockComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'quantity', 'price', 'totalprice', 'action'];
  items: any;
  dataSource: MatTableDataSource<SellProduct>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private sellservice: SellService
  ) { }

  ngOnInit() {
    this.items = this.convert(this.sellservice.getSellProduct());
    this.dataSource = new MatTableDataSource<SellProduct>(this.items);
    this.dataSource.paginator = this.paginator;
    console.log(this.items);
  }

  increaseQuantity(product) {
    console.log(product.quantity);
    return product.quantity++;
  }

  decreaseQuantity(product) {
    console.log(product.quantity);
    return product.quantity--;
  }
  
  convert(args: SellProduct[]): SellProduct[] {
    const sell_product: SellProduct[] = [];

    for(var i=0;i<args.length;i++) {
      const element=args[i];
      const tmp: SellProduct = {
              product_name: element.product_name,
              tag_name:'',
              quantity: 1,
              price_sell: element.price_sell,
              price_cost: element.price_cost,
              category_name: ''
            };
            sell_product.push(tmp);
          };
     return sell_product;
    }
}




