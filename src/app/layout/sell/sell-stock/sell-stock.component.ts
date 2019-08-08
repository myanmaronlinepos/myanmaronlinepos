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
  items: SellProduct[] = [];
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
  }

  increaseQuantity(product) {
    console.log(product.quantity);
    return product.quantity++;
  }

  decreaseQuantity(product) {
    console.log(product.quantity);
    return product.quantity--;
  }
  
  convert(args: SellItem[]): SellProduct[] {
    const sell_product: SellProduct[] = [];

    for(var i=0;i<args.length;i++) {
      const element=args[i];
      const tmp: SellProduct = {
              product_name: element.name,
              quantity: 1,
              price: element.price,
              total_price: element.price
            };
            sell_product.push(tmp);
          };
     return sell_product;
    }
}




