import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatButtonToggleChange} from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  Updatequantity='';
  Savebuttonwork=false;
  
  constructor() { }

  ngOnInit() {
    this.editForm = new FormGroup ({
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
    console.log(this.editForm);
  }
  onUpdatequantity(row: Event){
    this.Updatequantity=(<HTMLInputElement>event.target).value;
    }
    Onsetvalue(){
     
   }

}
