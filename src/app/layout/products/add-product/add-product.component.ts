import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/share/models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  addproductData: Product;
  productNameError:string="Please enter a valid product name";
  costError:string="Please enter a valid cost";
  saleError:string="Please enter a valid sale";
  enableSave:boolean=false;

  constructor(
    private datapostService: DataPostService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup ({
      'productName':new FormControl(null, Validators.required),
      'category':new FormControl(null),
      'tag':new FormControl(null, Validators.required),
      'cost':new FormControl(null, Validators.required),
      'sale':new FormControl(null, Validators.required),
    });
    this.formValid();
  }

  formValid() {
    this.productForm.valueChanges.subscribe(result => {
      if (this.productForm.status == "INVALID") {
        this.enableSave=false;
      } else if (this.productForm.status == "VALID") {
        this.enableSave=true;
      }
    });
  }

  onSubmit() {
    const formValue = this.productForm.value;

    this.addproductData= {
      product_id: 1,
      product_name: formValue.productName,
      category_id: 1,
      tag_id: 1,
      price_cost: formValue.cost,
      price_sell: formValue.sale,
      imageurl:' ',
      created_at: '',
      updated_at: '',
    }

    this.datapostService.postProduct(this.addproductData)
      .subscribe(
        response => {
        if(response) {
          this.router.navigate(['/dashboard/products/allproducts']);
        }

      },
      error => {
        console.log(error);
        this.productNameError=error.error.product_name;
      }

      )
  }

}
