import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/share/models/Product';
import { NewProduct } from 'src/app/share/models/NewProduct';
import { Category } from 'src/app/share/models/Category';
import { CategoryService } from 'src/app/share/services/category.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  addproductData: NewProduct;
  productNameError:string="Please enter a valid product name";
  costError:string="Please enter a valid cost";
  saleError:string="Please enter a valid sale";
  categoryError:string="Please choose category";
  enableSave:boolean=false;
  categories: any;
  tags:any;
  product_id:string;

  imageformData: any;
  imgSrc: any = 'assets/placeholder.jpg';
  selectedImage: any = null;

  constructor(
    private dataFetchService:DataFetchService,
    private datapostService: DataPostService,
    private router: Router,
    private categoryService: CategoryService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.fetchData();
    this.fetchTagData();
    this.productForm = new FormGroup ({
      'productName':new FormControl(null, Validators.required),
      'category':new FormControl(null, Validators.required),
      'tag':new FormControl(null),
      'cost':new FormControl(null, Validators.required),
      'sale':new FormControl(null, Validators.required),
      'imageurl':new FormControl(null, Validators.required)
    });
    this.formValid();
    
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

  fetchData() {
    this.dataFetchService.getAllCategory().subscribe(
      response => {
        console.log(response);
        this.categories=response;
      },
      error => {
          console.log(error);
      }
    )
  }

  fetchTagData() {
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
      category_id: formValue.category,
      tag_id: formValue.tag,
      price_cost: formValue.cost,
      price_sell: formValue.sale,
      imageurl: '',
      created_at: '',
      updated_at: '',
    }

    
    console.log(this.addproductData);
    
    this.datapostService.postProduct(this.addproductData)
    .subscribe(
      response => {
        if(response) {
          console.log(response);
          this.product_id=response;

          if (this.imageformData != null) {
            this.updateProductImage();
         }
          this.router.navigate(['/dashboard/products/allproducts']);
        }
        
      },
      error => {
        console.log(error);
        this.productNameError=error.error.product_name;
      }
      
      );

    }
    
    updateProductImage() {
    var formData = new FormData();
    formData.append("product_image", this.imageformData);
    formData.append("product_id", this.product_id);
    this.datapostService.updateProductImage(formData).subscribe(
      response => {
        console.log(response);
        let objectURL = URL.createObjectURL(response);
        this.imgSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      error => {
        console.log(error);
      }
    );
  }

}
