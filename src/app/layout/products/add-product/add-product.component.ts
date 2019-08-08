import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/share/models/Product';
import { NewProduct } from 'src/app/share/models/NewProduct';
import { Category } from 'src/app/share/models/Category';
import { CategoryService } from 'src/app/share/services/category.service';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';



class ImageSnippet {
  constructor(public src: string, public file: File){}
}

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

  selectedFile: ImageSnippet;

  processFile(imageInput: any) {
    const file: File= imageInput.files[0];
    const reader= new FileReader();

    reader.addEventListener('load',(event: any)=> {
      this.selectedFile=new ImageSnippet(event.target.result, file);
      // console.log(event);
      // console.log(this.selectedFile.src);
    });
    reader.readAsDataURL(file);
  }

  constructor(
    private dataFetchService:DataFetchService,
    private datapostService: DataPostService,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.fetchData();
    this.productForm = new FormGroup ({
      'productName':new FormControl(null, Validators.required),
      'category':new FormControl(null, Validators.required),
      // 'tag':new FormControl(null, Validators.required),
      'cost':new FormControl(null, Validators.required),
      'sale':new FormControl(null, Validators.required),
    });
    this.formValid();
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
