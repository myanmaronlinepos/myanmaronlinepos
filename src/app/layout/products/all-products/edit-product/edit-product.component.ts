import { Component, OnInit, Optional, Inject, ElementRef, ViewChild, Output, EventEmitter, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EditProduct } from 'src/app/share/models/editProduct';
import { from } from 'rxjs';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { AllProductsComponent } from '../all-products.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { Inventory } from 'src/app/share/models/Inventory';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  Updatequantity = '';
  Savebuttonwork = '';
  editformData:any;
  dataSource: any;
  id: string;
  allproduct: any;
  products: any;
  product: any;
  enableSave: boolean = false;
  imgSrc: any = 'assets/placeholder.jpg';
  selectedImage: any = null;
  imageformData: any;

  categories:any;
  categorySelectOption=1;

  tags:any;
  tagSelectOpton=1;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataFetchService: DataFetchService,
    private datapostService: DataPostService,
    private sanitizer: DomSanitizer
  ) { }
  
  ngOnInit() {

    this.editForm = new FormGroup({
      'product_name': new FormControl(null),
      'category': new FormControl(null),
      'tag': new FormControl(null),
      'cost_price': new FormControl(null),
      'sell_price': new FormControl(null),
      'imageurl': new FormControl(null)
    });

    // this.id = this.route.snapshot.paramMap.get('product_id');
    // if (this.id)
    //     this.fetchData();

    this.route.params.subscribe(
      (param: Params) => {
        console.log(param['product_id']);
        this.id = param['product_id'];
        this.fetchData();
        this.formValid();
      }
    );
  }

  processFile(event: any) {

    if (event.target.files && event.target.files[0]) {

      const file = event.target.files[0];
      this.imageformData = file;
      var reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.imgSrc = reader.result; 
      }
    }
    else {
      this.imgSrc = 'assets/placeholder.jpg';
      this.selectedImage = null;
    }
  }


  formValid() {
    this.editForm.valueChanges.subscribe(result => {
      if (this.editForm.status == "INVALID") {
        this.enableSave = false;
      } else if (this.editForm.status == "VALID") {
        this.enableSave = true;
      }
    });
  }

  fetchData() {
    this.dataFetchService.getProduct(this.id).subscribe(
      response => {
            this.product=response;
            console.log(this.product);
            this.categorySelectOption=this.product.category_id;
            this.tagSelectOpton=this.product.tag_id;
      },
      error => {
        console.log(error);
      }
    );

    this.dataFetchService.getAllCategory().subscribe(
      response => {
        console.log(response);
        this.categories=response;
      },
      error => {
        console.log(error);
      }
    );

    this.dataFetchService.getAllTag().subscribe(
      response => {
        console.log(response);
        this.tags=response;
      },
      error => {
        console.log(error);
      }
    )

  }

  onSubmit() {
    const formValue = this.product;
    
		if (this.editForm.valid) {
      this.editformData = {
       product_id:this.id,
       product_name: formValue.product_name,
       category_id: this.categorySelectOption,
       tag_id: this.tagSelectOpton,
       price_cost: formValue.price_cost,
       price_sell: formValue.price_sell,
      }

      console.log(this.editformData);

      
      if (this.imageformData != null) {
        this.updateProductImage();
      }

      if(this.editformData!=null) {
        this.updateProductData();
      }
    }
  }

  updateProductData() {
    this.datapostService.updateProduct(this.editformData)
        .subscribe(
          response => {
          if(response) {
            this.router.navigate(['/dashboard/products/allproducts']);
          }
  
        },
        error => {
          console.log(error);
         
        }
        );
  }

  updateProductImage() {
    var formData = new FormData();
    formData.append("product_image", this.imageformData);
    formData.append("product_id", this.id);
    this.datapostService.updateProductImage(formData).subscribe(
      response => {
        console.log(response);
        let objectURL = URL.createObjectURL(response);
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    )
  }

Onaddvalue(row) {
    row.quantity = this.Updatequantity;
  }
}