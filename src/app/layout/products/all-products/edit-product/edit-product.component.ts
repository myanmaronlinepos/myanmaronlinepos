import { Component, OnInit,Optional,Inject, ElementRef ,ViewChild, Output, EventEmitter, Renderer2} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EditProduct } from 'src/app/share/models/editProduct';
import { from } from 'rxjs';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { AllProductsComponent } from '../all-products.component';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { DataPostService } from 'src/app/share/services/data-post.service';
import { Inventory } from 'src/app/share/models/Inventory';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{
  editForm: FormGroup;
  Updatequantity='';
  Savebuttonwork='';
  dataSource:any;
  id: string;
  allproduct: any;
  products: any;
  product: any;
  enableSave:boolean=false;
  imgSrc: string = 'assets/placeholder.jpg';
  selectedImage: any = null;

  processFile( event: any ) {
    if( event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = 'assets/placeholder.jpg';
      this.selectedImage = null;
    }
  }

  @ViewChild('image') private image: ElementRef;
  constructor(
    private route:ActivatedRoute,
    private dataFetchService: DataFetchService,
    private dataPostService:DataPostService
           )
   { }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('product_id');
    if(this.id)
        this.fetchData();

    this.route.params.subscribe(
      (param:Params) => {
        console.log(param['product_id']);
        this.id=param['product_id'];
        this.fetchData();
        this.editForm = new FormGroup ({
          'productname':new FormControl(null, Validators.required),
          'quantity':new FormControl(null, Validators.required),
          'category':new FormControl(null, Validators.required),
          'tag':new FormControl(null),
          'price_cost':new FormControl(null, Validators.required),
          'price_sell':new FormControl(null, Validators.required),
          'imageurl':new FormControl(null, Validators.required)
        });
        this.formValid();
      }
    );
    }
    formValid() {
      this.editForm.valueChanges.subscribe(result => {
        if (this.editForm.status == "INVALID") {
          this.enableSave=false;
        } else if (this.editForm.status == "VALID") {
          this.enableSave=true;
        }
      });
    }
    fetchData() {
      this.dataFetchService.getAllProduct().subscribe(
        response => {
          this.products=response;
          console.log(this.products);
          const product_id=parseInt(this.id);
          this.products.forEach((p: any) => {
            if (p.product_id == product_id ) {
              this.product = p;
            }
          });
        },
        error => {
          console.log(error);
        }
      )
     
    }
    
    onSubmit() {}
    onUpdatequantity(row: Event){
      this.Updatequantity=(<HTMLInputElement>event.target).value;
      }
      Onaddvalue(row){
       row.quantity=this.Updatequantity;
     }


     
    }