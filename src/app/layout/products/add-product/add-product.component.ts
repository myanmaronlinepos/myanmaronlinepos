import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.productForm = new FormGroup ({
      'productName':new FormControl(null),
      'category':new FormControl(null),
      'tag':new FormControl(null),
      'quantity':new FormControl(null),
      'cost':new FormControl(null),
      'sale':new FormControl(null),
      'note':new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.productForm);
  }

}
