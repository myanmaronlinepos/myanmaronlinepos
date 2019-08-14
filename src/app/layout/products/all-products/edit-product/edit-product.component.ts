import { Component, OnInit,Optional,Inject, ElementRef ,ViewChild, Output, EventEmitter, Renderer2} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EditProduct } from 'src/app/share/models/editProduct';
import { from } from 'rxjs';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Product } from 'src/app/share/models/Product';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { AllProductsComponent } from '../all-products.component';
import { ActivatedRoute, Params,Router } from '@angular/router';
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

  urls = new Array<string>();
  detectFiles(event){
    this.urls = [];
    let files = event.target.files;
    if(files){
      for (let file of files){
        let reader = new FileReader();
        reader.onload = (e: any)=> {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  
  @ViewChild('image') private image: ElementRef;
  constructor(
    private route:ActivatedRoute,
           )
   { }
  ngOnInit() {
    this.route.params.subscribe(
      (param:Params) => {
        console.log(param['product_id']);
      }
    )
    }
    
    onSubmit() {
    }
    onUpdatequantity(row: Event){
      this.Updatequantity=(<HTMLInputElement>event.target).value;
      }
      Onaddvalue(row){
       row.Savebuttonwork=this.Updatequantity;
     }


     
    }