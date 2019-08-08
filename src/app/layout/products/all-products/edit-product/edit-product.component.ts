import { Component, OnInit,Optional,Inject, ElementRef ,ViewChild, Output, EventEmitter, Renderer2} from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditProduct } from 'src/app/share/models/editProduct';
import { EditProductService} from 'src/app/editproduct.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { from } from 'rxjs';
import { DataFetchService } from 'src/app/share/services/data-fetch.service';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Product } from 'src/app/share/models/Product';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { AllProductsComponent } from '../all-products.component';

export interface UsersData{
  id:number;
  product_name:string;
  category_id:string;
  tag_id:string;
}
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{
  action:string;
  local_data:any;

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
    public dialogRef:MatDialogRef<AllProductsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:UsersData

   ){
     console.log(data);
     this.local_data={...data};
     this.action =this.local_data.action;
   }
  ngOnInit() {
    }
    
    onSubmit() {
      console.log(this.editForm);   
    }
    doAction(){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
   closeDialog(){
     this.dialogRef.close({event:'Cancel'});
   }
    
    onUpdatequantity(row: Event){
      this.Updatequantity=(<HTMLInputElement>event.target).value;
      }
      Onaddvalue(event:any){
       this.Savebuttonwork=this.Updatequantity;
     }


     
    }