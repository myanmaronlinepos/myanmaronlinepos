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
  }

  onSubmit() {
    const formValue = this.productForm.value;

    this.addproductData= {
      product_id: 1,
      product_name: formValue.productName,
      category_id: 1,
      tag_id: 1,
      user_id: 1,
      price_cost: formValue.cost,
      price_sell: formValue.sale,
      created_at: '',
      updated_at: '',
    }
    console.log(formValue);

    this.datapostService.postData(this.addproductData)
      .then((registered: boolean) => {
        if (registered) {
          this.router.navigate(['/dashboard/products/allproducts']);
        } else {
          console.log('error');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
