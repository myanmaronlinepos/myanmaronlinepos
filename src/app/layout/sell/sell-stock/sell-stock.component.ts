import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { SellService } from 'src/app/share/services/sell.service';
import { SellProduct } from 'src/app/share/models/SellProduct';
import { SellItem } from 'src/app/share/models/SellItem';
import { DataPostService } from 'src/app/share/services/data-post.service';

@Component({
  selector: 'app-sell-stock',
  templateUrl: './sell-stock.component.html',
  styleUrls: ['./sell-stock.component.scss']
})
export class SellStockComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'quantity', 'price', 'totalprice', 'action'];
  items: any;
  quantity:any=[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private dataPostService:DataPostService,
    private sellservice: SellService
  ) { }

  ngOnInit() {
    this.items = this.convert(this.sellservice.getSellProduct());
    this.dataSource = new MatTableDataSource<any>(this.items);
    this.dataSource.paginator = this.paginator;
    console.log(this.items);
  }

  increaseQuantity(product,i) {
    console.log(product.quantity);
    console.log(this.quantity[i]);
    if(product.quantity >= this.quantity[i]) {
      console.log("reached maximum amount;");
      return;
    }

    product.total_sell=parseInt(product.total_sell)+parseInt(product.sell_price);
    product.total_cost=parseInt(product.total_cost)+parseInt(product.cost_price)
    product.profit=product.total_sell - product.total_cost;
    return product.quantity++;
  }

  decreaseQuantity(product) {
    console.log(product.quantity);
    if(product.quantity <= 1 ) {
      console.log("quantity at least 1");
      return;
    }
    product.total_sell=parseInt(product.total_sell)-parseInt(product.sell_price);
    product.total_cost=parseInt(product.total_cost)-parseInt(product.cost_price)
    product.profit=product.total_sell - product.total_cost;

    return product.quantity--;
  }

  sell() {
    console.log(this.items);
    const productList={
      'productList' : this.items
    }

    this.dataPostService.storeSellData(productList).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    
  }
  
  convert(args: SellProduct[]): SellProduct[] {
    const sell_product: any = [];

    for(var i=0;i<args.length;i++) {
      const element=args[i];

      this.quantity.push(element.quantity);
      const total_sell=element.sell_price;
      const total_cost=element.cost_price;
      const profit=total_sell - total_cost;
      const tmp: any = {
              product_id:element.product_id,
              product_name: element.product_name,
              quantity: 1,
              sell_price: element.sell_price,
              cost_price: element.cost_price,
              total_sell:total_sell,
              total_cost:total_cost,
              profit:profit
            };
            sell_product.push(tmp);
          };
     return sell_product;
    }
}




