import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Router } from '@angular/router';
import { EditProduct } from 'src/app/share/models/editProduct';
import { EditProductService} from 'src/app/editproduct.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
  editForm: FormGroup;
  Updatequantity='';
  Savebuttonwork='';
  dataSource:any;
  product:EditProduct;
  constructor(private editservice : EditProductService) {   }

  Rename(){

  }

  ngOnInit() {
    this.product=this.editservice.getSelectedProduct();
    console.log(this.product.productName);
    console.log(this.product.category);
    console.log(this.product.tag);
    console.log(this.product.quantity);
    console.log(this.product.cost);
    console.log(this.product.sale);
    console.log(this.product.note);
   
    }
  
    onSubmit() {
      console.log(this.editForm);   
    }
   
    
    onUpdatequantity(row: Event){
      this.Updatequantity=(<HTMLInputElement>event.target).value;
      }
      Onaddvalue(event:any){
       this.Savebuttonwork=this.Updatequantity;
     }
    }
    

  


  
  
  
 