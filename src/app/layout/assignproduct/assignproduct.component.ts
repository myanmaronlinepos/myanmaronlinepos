import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, FormControl } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { element } from '@angular/core/src/render3';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataPostService } from 'src/app/share/services/data-post.service';


@Component({
  selector: 'app-assignproduct',
  templateUrl: './assignproduct.component.html',
  styleUrls: ['./assignproduct.component.scss']
})
export class AssignproductComponent implements OnInit {

  // displayedColumns: string[] = ['assignproducts'];
  assignproducts: any;
  filteredproducts: any;
  selectedArray: any = [];
  assignedProduct: any = [];

  local_data: any;
  category_id: number;

  myform: FormGroup;
  private _filteredValue = '';

  // get filteredValue(): string {
  //   return this._filteredValue;
  // }
  // set filteredValue(value:string) {
  //   this._filteredValue=value;
  //   this.filteredproducts=this.filtereproducts(value);
  // }

  // filtereproducts(searchproduct: string) {
  //   return this.assignproducts.filter(products=>
  //     products.assignproducts.product_name.toLowerCase().indexOf(searchproduct.toLowerCase())!==-1);
  // }


  constructor(
    private dataFetchService: DataFetchService,
    private dataPostService: DataPostService,
    public dialogRef: MatDialogRef<AssignproductComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.local_data = { ...data };
    this.category_id = this.local_data.category_id;
  }

  ngOnInit() {
    this.fetchData();
    this.filteredproducts = this.assignproducts;
  }

  onSave() {

    if (this.selectedArray.length > 0) {

      this.selectedArray.forEach(
        (element: any) => {

          const each_product = {
            'product_id': element.product_id,
            'category_id': this.category_id
          };

          this.assignedProduct.push(each_product);
        });
    }
    
    const assign={
      'assignProductList':this.assignedProduct
    };

    console.log(assign);
    this.dataPostService.assignProduct(assign).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this.dialogRef.close();
  }

  onClose() {
    this.dialogRef.close();
  }


  fetchData() {
    this.dataFetchService.getAllProduct().subscribe(
      response => {
        this.assignproducts = response;
        this.filteredproducts = response;
        console.log(this.assignproducts);

      },
      error => {
        console.log(error);
      }
    )
  }


  checkChange(product) {
    if (!this.selectedArray.includes(product)) {
      this.selectedArray.push(product);
    } else {
      const index = this.selectedArray.indexOf(product);
      this.selectedArray.splice(index, 1);
    }
  
  }


  // filter(filterValue: string) {
  //   if(filterValue!==null) {
  //     this.filteredproduct=this.assignproducts.filter(element=> element.assignproduct==filterValue);
  //     console.log(this.assignproducts);
  //   }
  //   else {
  //     this.filteredproduct=this.assignproducts;
  //   }
  // }

}
